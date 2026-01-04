import { Cloud, Layers, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Innovation = () => {
    const { t } = useLanguage();

    return (
        <section id="innovation" className="section dark-section">
            <div className="container">
                <div className="innovation-grid fade-up">
                    <div className="innovation-text">
                        <h2>{t.innovation.title}</h2>
                        <p>{t.innovation.subtitle}</p>

                        <div className="tech-stack-list">
                            {t.innovation.items.map((item, idx) => (
                                <div key={idx} className="stack-item">
                                    <i>
                                        {idx === 0 ? <Cloud size={20} /> : idx === 1 ? <Layers size={20} /> : <Cpu size={20} />}
                                    </i>
                                    <div>
                                        <strong>{item.title}</strong>
                                        <small>{item.desc}</small>
                                    </div>
                                </div>
                            ))}
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
