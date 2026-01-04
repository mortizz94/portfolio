
import { Cloud, Layers, Cpu } from 'lucide-react';

const Innovation = () => {
    return (
        <section id="innovation" className="section dark-section">
            <div className="container">
                <div className="innovation-grid fade-up">
                    <div className="innovation-text">
                        <h2>Cloud, Web & <span className="blue-text">AI Labs</span></h2>
                        <p>
                            Mas allá de las operaciones tradicionales, despliego servicios modernos utilizando el ecosistema
                            <strong> Cloudflare</strong> e integro herramientas de <strong>IA</strong> en el flujo de
                            desarrollo.
                        </p>

                        <div className="tech-stack-list">
                            <div className="stack-item">
                                <i><Cloud size={20} /></i>
                                <div><strong>Cloudflare Ecosystem</strong><small>Workers, Pages, Zero Trust (Tunnels) & Auth.</small></div>
                            </div>
                            <div className="stack-item">
                                <i><Layers size={20} /></i>
                                <div><strong>Desarrollo Web</strong><small>Apps estáticas/dinámicas (HTML5, JS, Supabase).</small></div>
                            </div>
                            <div className="stack-item">
                                <i><Cpu size={20} /></i>
                                <div><strong>IA Integration</strong><small>Antigravity, Gemini & Stitch.</small></div>
                            </div>
                        </div>
                    </div>

                    <div className="ai-visual">
                        <div className="code-editor">
                            <div className="editor-tab">cloudflare_deploy.js</div>
                            <pre><code>
                                <span className="kwd">export</span> <span className="kwd">default</span> {'{'}{'\n'}
                                {'  '}<span className="func">async</span> <span className="func">fetch</span>(request) {'{'}{'\n'}
                                {'    '}<span className="com">// Cloudflare Worker Logic</span>{'\n'}
                                {'    '}<span className="kwd">const</span> auth = <span className="func">await</span> env.AUTH.get(request);{'\n'}
                                {'    '}<span className="kwd">if</span> (!auth) <span className="kwd">return</span> <span className="func">new</span> Response(<span className="str">"403"</span>);{'\n\n'}
                                {'    '}<span className="kwd">return</span> <span className="func">new</span> Response(<span className="str">"Secure App Deployed"</span>);{'\n'}
                                {'  '}{'}'}{'\n'}
                                {'}'}
                            </code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
