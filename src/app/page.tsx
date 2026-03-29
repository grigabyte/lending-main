'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '@/components/GlitchText';
import {
    Bot, Cpu, Layers, MessageCircle, Clock, TrendingUp, 
    Shield, ArrowRight, Zap, CheckCircle2, AlertCircle, 
    Workflow, Users, Sparkles, Target, Quote
} from 'lucide-react';
import { testimonials } from '@/data/content';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

export default function Home() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('ru-RU') + '.' + now.getMilliseconds().toString().padStart(3, '0'));
        }, 33);
        return () => clearInterval(timer);
    }, []);

    const services = [
        {
            icon: <Bot size={40} />,
            title: "ИИ-АССИСТЕНТЫ",
            desc: "Виртуальные сотрудники в Telegram, WhatsApp и на сайте. Отвечают клиентам 24/7, ведут до покупки.",
            result: "до 80% вопросов закрываются без вас"
        },
        {
            icon: <Layers size={40} />,
            title: "БАЗА ЗНАНИЙ",
            desc: "Загружаю регламенты, FAQ, документы — ИИ находит ответы мгновенно. Новые сотрудники обучаются за день.",
            result: "экономия 15+ часов на обучении"
        },
        {
            icon: <Cpu size={40} />,
            title: "АВТОМАТИЗАЦИЯ",
            desc: "Связываю CRM, таблицы, мессенджеры в единую систему. Рутинные задачи выполняются сами.",
            result: "минус 20 часов ручной работы в неделю"
        },
        {
            icon: <Workflow size={40} />,
            title: "АНАЛИТИКА",
            desc: "ИИ собирает данные, строит отчёты, находит узкие места. Вы видите картину бизнеса в реальном времени.",
            result: "решения на основе данных, а не интуиции"
        }
    ];

    const problems = [
        "Тратите часы на ответы в чатах и почте",
        "Сотрудники постоянно спрашивают одно и то же",
        "Не успеваете следить за всеми процессами",
        "Клиенты уходят из-за долгого ответа"
    ];

    const solutions = [
        "ИИ отвечает за секунды — клиенты довольны",
        "База знаний даёт ответы без вашего участия",
        "Автоматические отчёты и уведомления",
        "24/7 поддержка без найма людей"
    ];

    const process = [
        {
            id: "01",
            title: "СОЗВОН",
            text: "30 минут. Разбираемся, где теряете время и деньги. Бесплатно."
        },
        {
            id: "02",
            title: "РЕШЕНИЕ",
            text: "Предлагаю конкретный план: что автоматизируем, какой результат, сколько стоит."
        },
        {
            id: "03",
            title: "ЗАПУСК",
            text: "Внедряю систему за 1-2 недели. Обучаю команду. Поддерживаю после запуска."
        }
    ];

    const results = [
        { value: "25+", label: "часов экономии в неделю", icon: <Clock size={28} /> },
        { value: "3x", label: "быстрее ответы клиентам", icon: <Zap size={28} /> },
        { value: "0", label: "пропущенных заявок", icon: <Target size={28} /> }
    ];

    return (
        <main className="container pt-24 pb-32 min-h-screen">
            {/* Header */}
            <header className="fixed-header">
                <div>[ NEUROCOOLA ]</div>
                <div>[ {time} ]</div>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-center"
                >
                    <span className="label-pixel">ИИ-АВТОМАТИЗАЦИЯ ДЛЯ БИЗНЕСА</span>
                    <h1 className="title-main">
                        <GlitchText text="ВЕРНУ ВАМ 25 ЧАСОВ" />
                        <br />
                        <span className="title-accent">В НЕДЕЛЮ</span>
                    </h1>
                    <p className="subtitle-main">
                        Автоматизирую рутину вашего бизнеса через ИИ. 
                        Пока конкуренты тратят время на переписку — вы занимаетесь развитием.
                    </p>

                    <div className="hero-cta-group">
                        <a href="https://t.me/awake_g" target="_blank" className="cta-button cta-primary">
                            <MessageCircle size={20} />
                            <span>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</span>
                            <ArrowRight size={18} />
                        </a>
                        <p className="cta-subtext">Отвечу в течение часа</p>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div 
                    className="stats-grid"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {results.map((stat, i) => (
                        <motion.div key={i} className="stat-card" variants={fadeInUp}>
                            <div className="stat-icon">{stat.icon}</div>
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Problem / Solution */}
            <section className="section-spacer">
                <div className="text-center mb-16">
                    <span className="label-pixel">ЗНАКОМО?</span>
                    <h2 className="section-title">ВАШЕ ВРЕМЯ УТЕКАЕТ</h2>
                </div>

                <div className="comparison-grid">
                    {/* Problems */}
                    <div className="glass-panel comparison-card comparison-negative">
                        <div className="comparison-header">
                            <AlertCircle size={28} />
                            <h3>СЕЙЧАС</h3>
                        </div>
                        <ul className="comparison-list">
                            {problems.map((item, i) => (
                                <li key={i} className="indicator-down">{item}</li>
                            ))}
                        </ul>
                        <div className="comparison-footer">
                            <span className="comparison-total negative">-35 ч/неделю</span>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="glass-panel comparison-card comparison-positive">
                        <div className="comparison-header">
                            <CheckCircle2 size={28} />
                            <h3>ПОСЛЕ АВТОМАТИЗАЦИИ</h3>
                        </div>
                        <ul className="comparison-list">
                            {solutions.map((item, i) => (
                                <li key={i} className="indicator-up">{item}</li>
                            ))}
                        </ul>
                        <div className="comparison-footer">
                            <span className="comparison-total positive">+25 ч/неделю</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-spacer">
                <div className="text-center mb-16">
                    <span className="label-pixel">ЧТО Я ДЕЛАЮ</span>
                    <h2 className="section-title">ИНСТРУМЕНТЫ АВТОМАТИЗАЦИИ</h2>
                </div>

                <div className="services-grid">
                    {services.map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            className="glass-panel service-card"
                            whileHover={{ y: -5, borderColor: 'rgba(255, 62, 62, 0.4)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="service-icon">{item.icon}</div>
                            <h3 className="service-title">{item.title}</h3>
                            <p className="service-desc">{item.desc}</p>
                            <div className="service-result">
                                <Sparkles size={14} />
                                <span>{item.result}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="section-spacer">
                <div className="text-center mb-16">
                    <span className="label-pixel">КАК ЭТО РАБОТАЕТ</span>
                    <h2 className="section-title">ТРИ ШАГА К СВОБОДЕ</h2>
                </div>

                <div className="process-container">
                    {process.map((item, idx) => (
                        <div key={idx} className="process-step">
                            <div className="process-number">{item.id}</div>
                            <div className="process-content">
                                <h3 className="process-title">{item.title}</h3>
                                <p className="process-text">{item.text}</p>
                            </div>
                            {idx < process.length - 1 && <div className="process-connector" />}
                        </div>
                    ))}
                </div>
            </section>

            {/* About */}
            <section className="section-spacer">
                <div className="glass-panel about-section">
                    <div className="about-content">
                        <span className="label-pixel">ОБО МНЕ</span>
                        <h2 className="section-title">ГРИГОРИЙ</h2>
                        <p className="about-text">
                            Помогаю предпринимателям освободиться от операционки. 
                            Специализируюсь на внедрении ИИ-решений: чат-боты, базы знаний, 
                            автоматизация процессов.
                        </p>
                        <div className="about-stats">
                            <div className="about-stat">
                                <Users size={20} />
                                <span>20+ проектов</span>
                            </div>
                            <div className="about-stat">
                                <Shield size={20} />
                                <span>Гарантия результата</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-spacer">
                <div className="text-center mb-16">
                    <span className="label-pixel">ОТЗЫВЫ</span>
                    <h2 className="section-title">ЧТО ГОВОРЯТ КЛИЕНТЫ</h2>
                </div>

                <motion.div 
                    className="testimonials-grid"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {testimonials.map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            className="glass-panel testimonial-card"
                            variants={fadeInUp}
                            whileHover={{ y: -5, borderColor: 'rgba(255, 62, 62, 0.4)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="testimonial-quote">
                                <Quote size={24} />
                            </div>
                            <p className="testimonial-text">{item.text}</p>
                            <div className="testimonial-author">
                                <span className="testimonial-name">{item.name}</span>
                                <span className="testimonial-role">{item.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="glass-panel cta-card">
                    <div className="cta-icon">
                        <Zap size={48} />
                    </div>
                    <h2 className="section-title">ГОТОВЫ ВЕРНУТЬ СВОЁ ВРЕМЯ?</h2>
                    <p className="cta-text">
                        Напишите мне в Telegram. Обсудим ваши задачи и найдём решение за 30 минут.
                    </p>
                    <a href="https://t.me/awake_g" target="_blank" className="cta-button cta-primary cta-large">
                        <MessageCircle size={22} />
                        <span>НАПИСАТЬ В TELEGRAM</span>
                        <ArrowRight size={20} />
                    </a>
                    <p className="cta-guarantee">Консультация бесплатная. Без обязательств.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="site-footer">
                <div className="footer-brand">NEUROCOOLA</div>
                <div className="footer-copy">ИИ-автоматизация для бизнеса</div>
            </footer>
        </main>
    );
}
