import {
    Trophy, Landmark, Factory, Building2,
    MessageCircle, Star
} from "lucide-react";

export default function Customers() {
    return (
        <section id="customers" className="customers-section">
            <div className="customers-container">
                <div className="customers-header">
                    <span className="customers-badge">客户成功</span>
                    <h2 className="customers-title">见证数字化转型力量</h2>
                    <p className="customers-subtitle">来自行业领军企业的真实案例与评价</p>
                </div>

                {/* 标杆客户故事 */}
                <div className="case-studies">
                    <h3 className="section-subtitle"><Trophy className="w-5 h-5" /> 标杆客户故事</h3>
                    <div className="case-grid">
                        {/* 案例1: 金融科技 */}
                        <div id="case-finance" className="case-card">
                            <div className="case-header">
                                <div className="case-logo"><Landmark className="w-5 h-5" /></div>
                                <div className="case-info">
                                    <h4 className="case-company">某大型国有银行</h4>
                                    <span className="case-industry">金融科技</span>
                                </div>
                            </div>
                            <h5 className="case-title">智能风控系统助力信贷审批效率提升 300%</h5>
                            <p className="case-desc">通过部署 GradeLight 智能文档智搜系统，该银行实现了信贷申请材料的自动化识别与审核，将原本需要 3 天的审批流程缩短至 2 小时内完成。
                            </p>
                            <div className="case-metrics">
                                <div className="metric">
                                    <span className="metric-value">300%</span>
                                    <span className="metric-label">效率提升</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">2小时</span>
                                    <span className="metric-label">审批时间</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">95%</span>
                                    <span className="metric-label">识别准确率</span>
                                </div>
                            </div>
                        </div>

                        {/* 案例2: 智能制造 */}
                        <div id="case-manufacturing" className="case-card">
                            <div className="case-header">
                                <div className="case-logo"><Factory className="w-5 h-5" /></div>
                                <div className="case-info">
                                    <h4 className="case-company">某世界500强制造企业</h4>
                                    <span className="case-industry">智能制造</span>
                                </div>
                            </div>
                            <h5 className="case-title">工程图纸知识库打通研发-生产全链路</h5>
                            <p className="case-desc">利用 VLM 多模态图纸分析能力，构建了覆盖 10 万+工程图纸的智能知识库，工程师可通过自然语言快速检索历史设计方案与技术参数。</p>
                            <div className="case-metrics">
                                <div className="metric">
                                    <span className="metric-value">10万+</span>
                                    <span className="metric-label">图纸入库</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">70%</span>
                                    <span className="metric-label">检索效率</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">40%</span>
                                    <span className="metric-label">研发周期缩短</span>
                                </div>
                            </div>
                        </div>

                        {/* 案例3: 法律与政务 */}
                        <div id="case-legal" className="case-card">
                            <div className="case-header">
                                <div className="case-logo"><Building2 className="w-5 h-5" /></div>
                                <div className="case-info">
                                    <h4 className="case-company">某省级政务服务中心</h4>
                                    <span className="case-industry">智慧政务</span>
                                </div>
                            </div>
                            <h5 className="case-title">政务档案智能化改造实现&quot;秒批秒办&quot;</h5>
                            <p className="case-desc">通过 OCR 深度识别与智能归档系统，将 20 年积累的纸质档案完成数字化转型，群众办事由&quot;跑多趟&quot;变为&quot;一次办成&quot;。</p>
                            <div className="case-metrics">
                                <div className="metric">
                                    <span className="metric-value">500万+</span>
                                    <span className="metric-label">档案数字化</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">90%</span>
                                    <span className="metric-label">办事效率</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">98%</span>
                                    <span className="metric-label">群众满意度</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 客户评价 */}
                <div className="testimonials">
                    <h3 className="section-subtitle"><MessageCircle className="w-5 h-5" /> 客户评价</h3>
                    <div className="testimonial-grid">
                        {/* 评价1 */}
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>&quot;GradeLight 的 OCR 识别准确率超出了我们的预期，特别是对手写批注的识别能力，彻底解决了我们历史档案数字化的痛点。&quot;</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">张</div>
                                <div className="author-info">
                                    <span className="author-name">张总监</span>
                                    <span className="author-title">某上市公司 IT 中心</span>
                                </div>
                            </div>
                            <div className="testimonial-rating">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                        </div>

                        {/* 评价2 */}
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>&quot;图纸分析功能让我们的工程师效率提升了一倍以上，以前需要翻阅大量图纸找参数，现在直接问 AI 就能得到准确答案。&quot;</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">李</div>
                                <div className="author-info">
                                    <span className="author-name">李工程师</span>
                                    <span className="author-title">某汽车零部件企业</span>
                                </div>
                            </div>
                            <div className="testimonial-rating">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                        </div>

                        {/* 评价3 */}
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>&quot;合规审批 Agent 帮我们把财务报销审核时间从 3 天缩短到 30 分钟，而且风险识别比人工更全面，强烈推荐！&quot;</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">王</div>
                                <div className="author-info">
                                    <span className="author-name">王 CFO</span>
                                    <span className="author-title">某互联网科技公司</span>
                                </div>
                            </div>
                            <div className="testimonial-rating">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                        </div>

                        {/* 评价4 */}
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>&quot;作为 CTO，我对技术选型非常谨慎。GradeLight 团队的专业度和产品的稳定性都让人放心，99.9% 的可用性不是说说而已。&quot;</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">陈</div>
                                <div className="author-info">
                                    <span className="author-name">陈 CTO</span>
                                    <span className="author-title">某独角兽企业</span>
                                </div>
                            </div>
                            <div className="testimonial-rating">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
