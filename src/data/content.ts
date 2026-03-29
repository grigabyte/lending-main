import { Bot, Cpu, Layers, Workflow, Clock, Zap, Target } from 'lucide-react';
import { ReactNode } from 'react';

export interface Service {
    icon: ReactNode;
    title: string;
    desc: string;
    result: string;
}

export interface ProcessStep {
    id: string;
    title: string;
    text: string;
}

export interface Stat {
    value: string;
    label: string;
    icon: ReactNode;
}

export interface Testimonial {
    name: string;
    role: string;
    text: string;
}

export const services: Omit<Service, 'icon'>[] = [
    {
        title: "ИИ-АССИСТЕНТЫ",
        desc: "Виртуальные сотрудники в Telegram, WhatsApp и на сайте. Отвечают клиентам 24/7, ведут до покупки.",
        result: "до 80% вопросов закрываются без вас"
    },
    {
        title: "БАЗА ЗНАНИЙ",
        desc: "Загружаю регламенты, FAQ, документы — ИИ находит ответы мгновенно. Новые сотрудники обучаются за день.",
        result: "экономия 15+ часов на обучении"
    },
    {
        title: "АВТОМАТИЗАЦИЯ",
        desc: "Связываю CRM, таблицы, мессенджеры в единую систему. Рутинные задачи выполняются сами.",
        result: "минус 20 часов ручной работы в неделю"
    },
    {
        title: "АНАЛИТИКА",
        desc: "ИИ собирает данные, строит отчёты, находит узкие места. Вы видите картину бизнеса в реальном времени.",
        result: "решения на основе данных, а не интуиции"
    }
];

export const serviceIcons = [Bot, Layers, Cpu, Workflow];

export const problems: string[] = [
    "Тратите часы на ответы в чатах и почте",
    "Сотрудники постоянно спрашивают одно и то же",
    "Не успеваете следить за всеми процессами",
    "Клиенты уходят из-за долгого ответа"
];

export const solutions: string[] = [
    "ИИ отвечает за секунды — клиенты довольны",
    "База знаний даёт ответы без вашего участия",
    "Автоматические отчёты и уведомления",
    "24/7 поддержка без найма людей"
];

export const processSteps: ProcessStep[] = [
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

export const stats = [
    { value: "25+", label: "часов экономии в неделю" },
    { value: "3x", label: "быстрее ответы клиентам" },
    { value: "0", label: "пропущенных заявок" }
];

export const statIcons = [Clock, Zap, Target];

export const testimonials: Testimonial[] = [
    {
        name: "Алексей К.",
        role: "Владелец интернет-магазина",
        text: "Бот обрабатывает 80% заявок без моего участия. Раньше тратил 4 часа в день на переписку — теперь 30 минут на проверку."
    },
    {
        name: "Марина С.",
        role: "Руководитель отдела продаж",
        text: "Внедрили базу знаний для менеджеров. Новички выходят на план за неделю вместо месяца. Окупилось за 2 недели."
    },
    {
        name: "Дмитрий В.",
        role: "Основатель студии дизайна",
        text: "Автоматизация CRM и мессенджеров освободила 20+ часов в неделю. Наконец занимаюсь развитием, а не рутиной."
    }
];

export const siteConfig = {
    name: "NEUROCOOLA",
    title: "ИИ-автоматизация для бизнеса | NEUROCOOLA",
    description: "Автоматизирую рутину бизнеса через ИИ. Чат-боты, базы знаний, интеграции. Верну вам 25+ часов в неделю.",
    telegram: "https://t.me/awake_g",
    author: "Григорий"
};
