'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '@/components/GlitchText';
import {
    Bot, Cpu, Layers, Github, Terminal, Activity, Zap,
    ArrowRight, Clock, TrendingUp, MonitorCheck, AlertCircle, CheckCircle2, Workflow
} from 'lucide-react';

export default function Home() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-GB') + '.' + now.getMilliseconds().toString().padStart(3, '0'));
        }, 33);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="container pt-32 pb-40 min-h-screen">
            {/* Minimal Header */}
            <div style={{
                position: 'fixed',
                top: '2rem',
                left: '2rem',
                right: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                zIndex: 100,
                pointerEvents: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                opacity: 0.4,
                letterSpacing: '0.3em',
                textTransform: 'uppercase'
            }}>
                <div>[ NEUROCOOLA_NODE ]</div>
                <div>[ {time} ]</div>
            </div>

            {/* Hero */}
            <section className="section-spacer text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="label-pixel">DELEGATION_PROTOCOL</span>
                    <h1 className="title-main">
                        <GlitchText text="Я ВОЗВРАЩАЮ ВАМ ВРЕМЯ" />
                    </h1>
                    <p className="subtitle-main mb-20">
                        Освобождаю 25+ часов в неделю, автоматизируя рутину вашего бизнеса через ИИ.
                    </p>

                    <div className="grid-3 max-w-4xl mx-auto border-t pt-20" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                        {[
                            { icon: <Clock size={48} className="icon-glow" />, label: "FREEDOM", val: "25h+", progress: 85 },
                            { icon: <TrendingUp size={48} className="icon-glow" />, label: "EFFICIENCY", val: "X10", progress: 100 },
                            { icon: <MonitorCheck size={48} className="icon-glow" />, label: "ACCURACY", val: "99%", progress: 99 }
                        ].map((stat, i) => (
                            <div key={i} className="stat-item">
                                <div className="icon-box mx-auto" style={{ color: 'var(--accent)' }}>
                                    {stat.icon}
                                </div>
                                <span className="stat-value stat-highlight">{stat.val}</span>
                                <span className="stat-label">{stat.label}</span>
                                <div className="progress-bar-container">
                                    <div className="progress-bar" style={{ width: `${stat.progress}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ASCII Divider */}
            <div className="ascii-divider">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>

            {/* Comparison */}
            <section className="section-spacer">
                <div className="text-center mb-20">
                    <span className="label-pixel">OPTIMIZATION_ANALYSIS</span>
                    <h2 className="section-title">КАК ВЫ ЭКОНОМИТЕ</h2>
                </div>

                <div className="card-grid">
                    {/* Before */}
                    <div className="glass-panel comparison-card" style={{ opacity: 0.6 }}>
                        <div className="flex items-center gap-4 comparison-icon">
                            <AlertCircle size={32} style={{ color: 'var(--secondary)' }} />
                            <h3 className="comparison-title" style={{ color: 'var(--secondary)', marginBottom: 0 }}>
                                БЕЗ ИИ: РУТИНА
                            </h3>
                        </div>
                        <ul className="comparison-list">
                            <li className="indicator-down">4 часа в день на ответы и саппорт</li>
                            <li className="indicator-down">2 часа на ручной сбор отчетов</li>
                            <li className="indicator-down">Постоянный фокус на операционке</li>
                            <li className="indicator-down">Риск ошибок из-за усталости</li>
                        </ul>
                        <div className="comparison-footer">
                            <span className="stat-label">TOTAL_WASTE</span>
                            <span className="comparison-total">35h / week</span>
                        </div>
                    </div>

                    {/* After */}
                    <div className="glass-panel comparison-card" style={{
                        borderColor: 'rgba(255, 62, 62, 0.3)',
                        background: 'rgba(255, 62, 62, 0.03)'
                    }}>
                        <div className="flex items-center gap-4 comparison-icon">
                            <CheckCircle2 size={32} style={{ color: 'var(--accent)' }} />
                            <h3 className="comparison-title" style={{ color: 'var(--accent)', marginBottom: 0 }}>
                                С ИИ: СВОБОДА
                            </h3>
                        </div>
                        <ul className="comparison-list">
                            <li className="indicator-up">Агенты ведут продажи 24/7</li>
                            <li className="indicator-up">RAG-система готовит отчеты сама</li>
                            <li className="indicator-up">Вы занимаетесь только стратегией</li>
                            <li className="indicator-up">100% точность алгоритмов</li>
                        </ul>
                        <div className="comparison-footer" style={{ borderColor: 'rgba(255, 62, 62, 0.2)' }}>
                            <span className="stat-label" style={{ color: 'var(--accent)' }}>SAVED_TIME</span>
                            <span className="comparison-total" style={{ color: 'var(--accent)' }}>-25h / week</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ASCII Divider */}
            <div className="ascii-divider">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>

            {/* Services */}
            <section className="section-spacer">
                <div className="text-center mb-20">
                    <span className="label-pixel">CORE_MODULES</span>
                    <h2 className="section-title">ИНСТРУМЕНТАРИЙ</h2>
                </div>

                <div className="card-grid">
                    {[
                        {
                            icon: <Bot size={48} />,
                            title: "АВТОНОМНЫЕ АГЕНТЫ",
                            desc: "Сотрудники, которые работают через Telegram, CRM и почту. Сами ведут клиента до оплаты."
                        },
                        {
                            icon: <Layers size={48} />,
                            title: "RAG БАЗЫ ЗНАНИЙ",
                            desc: "Весь ваш опыт и регламенты в 'голове' ИИ. Он отвечает на любые вопросы мгновенно."
                        },
                        {
                            icon: <Cpu size={48} />,
                            title: "ИНТЕГРАЦИЯ LLM",
                            desc: "Внедрение GPT-4, Claude или Llama в ваш стек. Безопасно, быстро и под ключ."
                        },
                        {
                            icon: <Workflow size={48} />,
                            title: "SMART LOGIC",
                            desc: "Глубокая автоматизация цепочек действий. ИИ сам связывает ваши сервисы в единую сеть."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-panel service-card">
                            <div className="icon-box icon-box-lg mx-auto service-icon icon-glow" style={{ color: 'var(--accent)' }}>
                                {item.icon}
                            </div>
                            <h3 className="service-title">{item.title}</h3>
                            <p className="service-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ASCII Divider */}
            <div className="ascii-divider">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>

            {/* Process */}
            <section className="section-spacer max-w-3xl mx-auto">
                <div className="text-center mb-20">
                    <span className="label-pixel">DEPLOYMENT_MAP</span>
                    <h2 className="section-title">КАК Я ЭТО ДЕЛАЮ</h2>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            id: "01",
                            title: "ПОГРУЖЕНИЕ",
                            text: "Провожу аудит ваших процессов. Нахожу 'черные дыры', съедающие время."
                        },
                        {
                            id: "02",
                            title: "СБОРКА",
                            text: "Проектирую логику и обучаю систему на ваших данных."
                        },
                        {
                            id: "03",
                            title: "ДЕЙСТВИЕ",
                            text: "Запускаю ИИ в работу. Вы получаете ежедневный отчет о сэкономленных ресурсах."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="process-step" style={{ position: 'relative' }}>
                            <div className="process-number pulse-accent">{item.id}</div>
                            <div className="process-content">
                                <h3 className="process-title">
                                    {item.title}<span className="blinking-cursor"></span>
                                </h3>
                                <p className="process-text">{item.text}</p>
                            </div>
                            {idx < 2 && <div className="connecting-line"></div>}
                        </div>
                    ))}
                </div>
            </section>

            {/* ASCII Divider */}
            <div className="ascii-divider">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>

            {/* CTA */}
            <section className="max-w-2xl mx-auto">
                <div className="glass-panel text-center" style={{
                    borderColor: 'rgba(255, 62, 62, 0.2)',
                    padding: '4rem 3rem'
                }}>
                    <div className="icon-box icon-box-accent mx-auto mb-8">
                        <Zap size={40} style={{ color: 'var(--accent)' }} />
                    </div>
                    <h2 className="section-title mb-6">
                        ГОТОВЫ ВЕРНУТЬ СЕБЕ СВОЮ ЖИЗНЬ?
                    </h2>
                    <p className="subtitle-main mb-12" style={{ fontSize: '1.1rem' }}>
                        Напишите мне сейчас. Давайте сделаем ваш бизнес автономным и прибыльным.
                    </p>
                    <a href="https://t.me/awake_g" target="_blank" className="cta-button">
                        <span>НАПИСАТЬ В TELEGRAM</span>
                        <ArrowRight size={20} />
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-20 pt-12 border-t text-center" style={{
                opacity: 0.1,
                pointerEvents: 'none',
                borderColor: 'rgba(255,255,255,0.05)'
            }}>
                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '8px',
                    letterSpacing: '1.5em',
                    marginBottom: '1rem'
                }}>
                    NEUROCOOLA_INTERNAL_NETWORK
                </div>
                <div className="flex justify-center gap-12">
                    <Github size={12} />
                    <Terminal size={12} />
                    <Activity size={12} />
                </div>
            </footer>
        </main>
    );
}
