import {
    Target, Telescope, Lightbulb, Handshake,
    Rocket, ShieldCheck, Mail, Wrench, MapPin
} from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                {/* 公司介绍 */}
                <div className="about-intro">
                    <div className="about-content">
                        <span className="about-badge">关于梯度光年</span>
                        <h2 className="about-title">用 AI 重新定义企业办公</h2>
                        <p className="about-desc">
                            <strong>GradeLight（梯度光年）</strong>是一家专注于企业级 AI
                            应用开发的科技公司。我们致力于将前沿的人工智能技术与企业实际业务场景深度融合，为客户提供智能化、高效率的数字化转型解决方案。
                        </p>
                        <p className="about-desc">
                            自成立以来，我们已服务超过 <strong>500+</strong>
                            家企业客户，覆盖金融、制造、法律、政务等多个行业，帮助企业实现文档智能化处理、知识库构建与智能检索、流程自动化审批等核心能力升级。
                        </p>
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-number">2021</span>
                                <span className="highlight-label">成立年份</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">500+</span>
                                <span className="highlight-label">服务客户</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">50+</span>
                                <span className="highlight-label">核心团队</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">10+</span>
                                <span className="highlight-label">技术专利</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-visual">
                        <div className="visual-card">
                            <div className="visual-icon"><Target className="w-5 h-5" /></div>
                            <h4>我们的使命</h4>
                            <p>让每一家企业都能轻松拥抱 AI，实现降本增效与业务创新</p>
                        </div>
                        <div className="visual-card">
                            <div className="visual-icon"><Telescope className="w-5 h-5" /></div>
                            <h4>我们的愿景</h4>
                            <p>成为企业数字化转型最值得信赖的 AI 技术伙伴</p>
                        </div>
                    </div>
                </div>

                {/* 核心价值观 */}
                <div className="core-values">
                    <h3 className="values-title">核心价值观</h3>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon"><Lightbulb className="w-5 h-5" /></div>
                            <h4>技术驱动</h4>
                            <p>持续投入前沿 AI 技术研发，保持技术领先优势</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon"><Handshake className="w-5 h-5" /></div>
                            <h4>客户至上</h4>
                            <p>深入理解客户需求，提供量身定制的解决方案</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon"><Rocket className="w-5 h-5" /></div>
                            <h4>追求卓越</h4>
                            <p>对产品质量精益求精，持续优化用户体验</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon"><ShieldCheck className="w-5 h-5" /></div>
                            <h4>安全可信</h4>
                            <p>严格遵守数据安全规范，保障客户信息安全</p>
                        </div>
                    </div>
                </div>

                {/* 联系我们 */}
                <div className="contact-section">
                    <div className="contact-info">
                        <h3>联系我们</h3>
                        <p className="contact-desc">我们期待与您的交流，无论是产品咨询、商务合作还是技术支持</p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon"><Mail className="w-5 h-5" /></span>
                                <div>
                                    <span className="contact-label">商务合作</span>
                                    <a href="mailto:bd@gradelight.ai">bd@gradelight.ai</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><Wrench className="w-5 h-5" /></span>
                                <div>
                                    <span className="contact-label">技术支持</span>
                                    <a href="mailto:support@gradelight.ai">support@gradelight.ai</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon"><MapPin className="w-5 h-5" /></span>
                                <div>
                                    <span className="contact-label">公司地址</span>
                                    <span>内蒙古呼和浩特市 AI 模创空间</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-cta">
                        <h4>准备好开启 AI 之旅？</h4>
                        <p>立即预约专属顾问，获取您的定制化解决方案</p>
                        <Link href="#contact" className="btn-primary-large">预约演示</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
