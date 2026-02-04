"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

const Typewriter = () => {
    const fullText = "用 AI 重新定义\n应用体验";
    const [displayLength, setDisplayLength] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            // 正在打字 - 逐个字符出现
            if (displayLength < fullText.length) {
                timeout = setTimeout(() => {
                    setDisplayLength((prev) => prev + 1);
                }, 150);
            } else {
                // 全部打完后，暂停一下再开始删除
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        } else {
            // 正在删除 - 从后往前逐个消失
            if (displayLength > 0) {
                timeout = setTimeout(() => {
                    setDisplayLength((prev) => prev - 1);
                }, 100);
            } else {
                // 全部删完后，暂停一下再开始重新打字
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                }, 500);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayLength, isDeleting, fullText.length]);

    // 渲染文字，为 "AI" 添加特殊样式
    const renderText = () => {
        const visibleText = fullText.substring(0, displayLength);
        const parts: React.ReactNode[] = [];
        let i = 0;

        while (i < visibleText.length) {
            // 检查是否是 "AI" 的开始位置
            if (visibleText.substring(i, i + 2) === "AI") {
                parts.push(
                    <span key={i} className="highlight-ai">AI</span>
                );
                i += 2;
            } else {
                parts.push(visibleText[i]);
                i++;
            }
        }

        return parts;
    };

    return (
        <span className="typewriter-container">
            <span className="typewriter-text whitespace-pre-wrap">
                {renderText()}
            </span>
            <span className="typewriter-cursor">|</span>
        </span>
    );
};

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-decoration decoration-1"></div>
            <div className="hero-decoration decoration-2"></div>

            {/* 3. 背景流动线条 SVG */}
            <svg className="flow-line" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 600 C 200 400, 600 800, 1500 200" stroke="url(#paint0_linear)" strokeWidth="1.5"
                    strokeDasharray="10 10" />
                <path d="M-100 800 C 300 500, 700 900, 1600 300" stroke="url(#paint1_linear)" strokeWidth="1"
                    opacity="0.6" />
                <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--primary)" stopOpacity="0" />
                        <stop offset="0.5" stopColor="var(--primary)" stopOpacity="0.2" />
                        <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8B5CF6" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.15" />
                        <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="hero-content">
                <div className="hero-left">
                    <h1 className="hero-title">
                        <span className="typewriter-container">
                            <Typewriter />
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        GradeLight 专注于企业级 AI 应用开发，为您打造智能化解决方案。
                        让 AI 成为您业务增长的核心驱动力。
                    </p>
                    <div className="hero-ctas">
                        <Link href="#products" className="btn-primary">
                            立即体验
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="#about" className="btn-secondary">
                            了解更多
                        </Link>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">500<span className="plus">+</span></div>
                            <div className="stat-label">企业客户</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">99.9<span className="plus">%</span></div>
                            <div className="stat-label">服务可用性</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10<span className="plus">M+</span></div>
                            <div className="stat-label">API 调用/日</div>
                        </div>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="spline-container">
                        <Spline scene="https://prod.spline.design/XjUV1h7c9Q6BMryI/scene.splinecode" />
                    </div>
                </div>
            </div>
        </section>
    );
}
