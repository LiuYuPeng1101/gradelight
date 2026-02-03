"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FileText, Ruler, Scale,
    Coins, Factory, ShieldCheck,
    Trophy, MessageCircle, Sparkles,
    Users, Phone
} from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo-section">
                <Image src="/assets/logo.png" alt="GradeLight Logo" width={40} height={40} className="logo-img" />
                <span className="logo-text">GradeLight</span>
            </div>
            <div className="nav-links">
                <div className="nav-item group">
                    <Link href="#">产品</Link>
                    <div className="mega-menu">
                        <div className="mega-menu-header">
                            <span className="mega-menu-title">产品中心 · 梯度光年（GradeLight）企业级智能办公套件</span>
                        </div>
                        <div className="mega-grid">
                            <div className="product-card cursor-pointer" onClick={() => scrollToSection('product-showcase')}>
                                <div className="product-icon"><FileText className="w-5 h-5" /></div>
                                <div className="product-title">
                                    智能文档智搜
                                    <span className="product-tag">OCR RAG</span>
                                </div>
                                <p className="product-desc">利用 OCR 深度识别，将合同、票据等转化为可检索数据，让沉睡档案秒懂秒查。</p>
                            </div>

                            <div className="product-card cursor-pointer" onClick={() => scrollToSection('product-showcase')}>
                                <div className="product-icon"><Ruler className="w-5 h-5" /></div>
                                <div className="product-title">
                                    专业的图纸分析
                                    <span className="product-tag">VLM RAG</span>
                                </div>
                                <p className="product-desc">基于 VLM 多模态大模型，直接理解架构图、CAD 图纸的空间逻辑与参数信息。</p>
                            </div>

                            <div className="product-card cursor-pointer" onClick={() => scrollToSection('product-showcase')}>
                                <div className="product-icon"><Scale className="w-5 h-5" /></div>
                                <div className="product-title">
                                    智能合规审批
                                    <span className="product-tag">Agent</span>
                                </div>
                                <p className="product-desc">数字化风控官，自动预审合同与报销，识别违规风险并给出修改建议。</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav-item group">
                    <Link href="#">解决方案</Link>
                    <div className="mega-menu">
                        <div className="mega-menu-header">
                            <span className="mega-menu-title">行业解决方案 · 深度赋能垂直领域</span>
                        </div>
                        <div className="mega-grid">
                            <Link href="#case-finance" className="product-card">
                                <div className="product-icon"><Coins className="w-5 h-5" /></div>
                                <div className="product-title">金融科技</div>
                                <p className="product-desc">智能风控、自动化信贷审批、合规审计，提升金融业务处理效率。</p>
                            </Link>
                            <Link href="#case-manufacturing" className="product-card">
                                <div className="product-icon"><Factory className="w-5 h-5" /></div>
                                <div className="product-title">智能制造</div>
                                <p className="product-desc">工业图纸解析、供应链文档管理、设备维护知识库，助力制造业数字化转型。</p>
                            </Link>
                            <Link href="#case-legal" className="product-card">
                                <div className="product-icon"><ShieldCheck className="w-5 h-5" /></div>
                                <div className="product-title">法律与政务</div>
                                <p className="product-desc">卷宗自动归档、法规政策语义检索、公文自动生成，智慧政务首选。</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="nav-item group">
                    <Link href="#">案例</Link>
                    <div className="mega-menu">
                        <div className="mega-menu-header">
                            <span className="mega-menu-title">客户成功 · 见证数字化转型力量</span>
                        </div>
                        <div className="mega-grid">
                            <Link href="#customers" className="product-card">
                                <div className="product-icon"><Trophy className="w-5 h-5" /></div>
                                <div className="product-title">标杆客户故事</div>
                                <p className="product-desc">看看行业领军者如何通过 GradeLight 实现数字化转型，提升核心竞争力。</p>
                            </Link>
                            <Link href="#customers" className="product-card">
                                <div className="product-icon"><MessageCircle className="w-5 h-5" /></div>
                                <div className="product-title">客户评价</div>
                                <p className="product-desc">来自 CTO、CIO 及一线使用者的真实反馈，听听他们怎么说。</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="nav-item group">
                    <Link href="#">关于我们</Link>
                    <div className="mega-menu">
                        <div className="mega-menu-header">
                            <span className="mega-menu-title">关于梯度光年 · GradeLight</span>
                        </div>
                        <div className="mega-grid">
                            <div className="product-card">
                                <div className="product-icon"><Sparkles className="w-5 h-5" /></div>
                                <div className="product-title">公司愿景</div>
                                <p className="product-desc">用 AI 重塑企业生产力，让工作从繁琐中解放，每个人都能专注于创造价值。</p>
                            </div>
                            <div className="product-card">
                                <div className="product-icon"><Users className="w-5 h-5" /></div>
                                <div className="product-title">核心团队</div>
                                <p className="product-desc">由前大厂资深科学家与工程师领衔，汇聚全球顶尖 AI 人才。</p>
                            </div>
                            <Link href="#about" className="product-card">
                                <div className="product-icon"><Phone className="w-5 h-5" /></div>
                                <div className="product-title">联系支持</div>
                                <p className="product-desc">预约专属演示、商务合作洽谈或获取技术支持，我们要随时为您服务。</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="#about" className="cta-button">预约演示</Link>
        </nav>
    );
}
