
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';
import { LanguageProvider } from '../context/LanguageContext';

// Mock config
vi.mock('../data/config', () => ({
    config: { formspreeId: 'https://formspree.io/f/test' }
}));

// Helper to render with providers
const renderWithProviders = (ui: React.ReactNode) => {
    return render(
        <LanguageProvider>
            {ui}
        </LanguageProvider>
    );
};

describe('ContactForm Component', () => {
    const mockFetch = vi.fn();

    beforeEach(() => {
        vi.resetAllMocks();
        vi.stubGlobal('fetch', mockFetch);
    });

    it('renders form fields correctly', () => {
        renderWithProviders(<ContactForm />);

        expect(screen.getByPlaceholderText(/Nombre/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Mensaje/i)).toBeInTheDocument();
    });

    it('updates input values on change', () => {
        renderWithProviders(<ContactForm />);

        const nameInput = screen.getByPlaceholderText(/Nombre/i) as HTMLInputElement;
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        expect(nameInput.value).toBe('John Doe');
    });

    it('submits the form successfully', async () => {
        mockFetch.mockResolvedValue({ ok: true });

        renderWithProviders(<ContactForm />);

        fireEvent.change(screen.getByPlaceholderText(/Nombre/i), { target: { value: 'Test User' } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Mensaje/i), { target: { value: 'Hello world' } });

        const submitBtn = screen.getByRole('button');
        fireEvent.click(submitBtn);

        // Wait for success directly as loader might be implementation detail or use test-id
        await waitFor(() => {
            expect(mockFetch).toHaveBeenCalledWith('https://formspree.io/f/test', expect.objectContaining({
                method: 'POST',
                body: JSON.stringify({
                    name: 'Test User',
                    email: 'test@example.com',
                    message: 'Hello world'
                })
            }));

            expect(screen.getByText(/¡Enviado!/i)).toBeInTheDocument();
        });
    });

    it('handles submission error', async () => {
        mockFetch.mockResolvedValue({ ok: false });

        renderWithProviders(<ContactForm />);

        fireEvent.change(screen.getByPlaceholderText(/Nombre/i), { target: { value: 'Fail User' } });
        fireEvent.click(screen.getByRole('button'));

        await waitFor(() => {
            expect(screen.getByText(/Error/i)).toBeInTheDocument();
        });
    });
});
