"use client";

import { useState } from "react";
import {
    FileText, Ruler, Scale,
    Search, Zap, Folder, PenTool,
    MessageCircle, AlertTriangle, Coins, Target, Telescope
} from "lucide-react";
// 如果有图片组件需要引入，但这里主要用 img 标签配 Next.js public 目录

export default function Solutions() {
    const [activeTab, setActiveTab] = useState<'ocr' | 'vlm' | 'agent'>('ocr');

    return (
        <>
            {/* Product Feature Switcher */}
            <div id="product-showcase" className="feature-switcher-container">
                {/* Sidebar Navigation */}
                <div className="switcher-sidebar">
                    <div className="switcher-header">
                        <h3>Product Suite</h3>
                    </div>

                    <div
                        className={`switcher-tab ${activeTab === 'ocr' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ocr')}
                    >
                        <div className="tab-icon">📄</div>
                        <div className="tab-info">
                            <span className="tab-title">智能文档智搜</span>
                            <span className="tab-subtitle">OCR RAG 引擎</span>
                        </div>
                    </div>

                    <div
                        className={`switcher-tab ${activeTab === 'vlm' ? 'active' : ''}`}
                        onClick={() => setActiveTab('vlm')}
                    >
                        <div className="tab-icon"><Ruler className="w-5 h-5" /></div>
                        <div className="tab-info">
                            <span className="tab-title">图纸分析专家</span>
                            <span className="tab-subtitle">VLM 多模态</span>
                        </div>
                    </div>

                    <div
                        className={`switcher-tab ${activeTab === 'agent' ? 'active' : ''}`}
                        onClick={() => setActiveTab('agent')}
                    >
                        <div className="tab-icon"><Scale className="w-5 h-5" /></div>
                        <div className="tab-info">
                            <span className="tab-title">合规审批 Agent</span>
                            <span className="tab-subtitle">智能风控</span>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="switcher-content">
                    {/* Panel 1: OCR */}
                    <div id="panel-ocr" className={`content-panel ${activeTab === 'ocr' ? 'active' : ''}`}>
                        <span className="panel-tag">核心产品</span>
                        <h2 className="panel-title">唤醒沉睡的企业档案</h2>
                        <p className="panel-desc">利用 OCR 深度识别技术，将合同、票据、财务报表及手写批注转化为可检索的结构化数据。解决企业非结构化数据查找难、利用率低的痛点。</p>
                        <div className="panel-grid">
                            <div className="panel-feature">
                                <i><Search className="w-5 h-5" /></i> <span>OCR 深度识别</span>
                            </div>
                            <div className="panel-feature">
                                <i><Zap className="w-5 h-5" /></i> <span>秒级全库检索</span>
                            </div>
                            <div className="panel-feature">
                                <i><Folder className="w-5 h-5" /></i> <span>结构化自动归档</span>
                            </div>
                            <div className="panel-feature">
                                <i><PenTool className="w-5 h-5" /></i> <span>手写体精准识别</span>
                            </div>
                        </div>
                        <div className="panel-visual">
                            {/* Ensure images are in public/assets */}
                            <img src="/assets/prod_ocr_scan.png" alt="OCR RAG" />
                        </div>
                    </div>

                    {/* Panel 2: VLM */}
                    <div id="panel-vlm" className={`content-panel ${activeTab === 'vlm' ? 'active' : ''}`}>
                        <span className="panel-tag" style={{ background: '#F3E6FF', color: '#8B5CF6' }}>工科利器</span>
                        <h2 className="panel-title">读懂复杂的工程图纸</h2>
                        <p className="panel-desc">基于 VLM 多模态大模型，直接理解架构图、CAD 图纸、工业流程图的空间逻辑与参数信息。实现对复杂图形资料的语义检索与技术问答。</p>
                        <div className="panel-grid">
                            <div className="panel-feature">
                                <i><Ruler className="w-5 h-5" /></i> <span>多模态图形理解</span>
                            </div>
                            <div className="panel-feature">
                                <i>🏗️</i> <span>CAD/蓝图解析</span>
                            </div>
                            <div className="panel-feature">
                                <i>🧠</i> <span>空间逻辑推理</span>
                            </div>
                            <div className="panel-feature">
                                <i><MessageCircle className="w-5 h-5" /></i> <span>技术图纸问答</span>
                            </div>
                        </div>
                        <div className="panel-visual">
                            <img src="/assets/prod_vlm_blueprint.png" alt="VLM RAG" />
                        </div>
                    </div>

                    {/* Panel 3: Agent */}
                    <div id="panel-agent" className={`content-panel ${activeTab === 'agent' ? 'active' : ''}`}>
                        <span className="panel-tag" style={{ background: '#FFF7E6', color: '#F59E0B' }}>自动化</span>
                        <h2 className="panel-title">您的 24h 智能风控官</h2>
                        <p className="panel-desc">自动根据企业规章制度、法律条款对提交的申请文档进行预审，识别违规风险并给出修改建议。将繁琐的财务报销审核、法务合同校对自动化。</p>
                        <div className="panel-grid">
                            <div className="panel-feature">
                                <i>🛡️</i> <span>自动合规预审</span>
                            </div>
                            <div className="panel-feature">
                                <i><AlertTriangle className="w-5 h-5" /></i> <span>风险点识别</span>
                            </div>
                            <div className="panel-feature">
                                <i><FileText className="w-5 h-5" /></i> <span>修改建议生成</span>
                            </div>
                            <div className="panel-feature">
                                <i><Coins className="w-5 h-5" /></i> <span>降本增效工具</span>
                            </div>
                        </div>
                        <div className="panel-visual">
                            <img src="/assets/prod_workflow_agent.png" alt="Workflow Agent" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 解决方案 Section */}
            <section id="solutions" className="solutions-section">
                <div className="solutions-container">
                    <div className="solutions-header">
                        <span className="solutions-badge">行业解决方案</span>
                        <h2 className="solutions-title">深度赋能垂直领域</h2>
                        <p className="solutions-subtitle">针对不同行业痛点，提供量身定制的 AI 智能化解决方案，助力企业数字化转型</p>
                    </div>

                    <div className="solutions-grid">
                        {/* 金融科技 */}
                        <div className="solution-card">
                            <div className="solution-icon-wrapper finance">
                                <span className="solution-icon"><Coins className="w-5 h-5" /></span>
                            </div>
                            <h3 className="solution-name">金融科技</h3>
                            <p className="solution-desc">智能风控、自动化信贷审批、合规审计，提升金融业务处理效率，降低操作风险。</p>
                            <ul className="solution-features">
                                <li><ShieldCheck className="w-5 h-5" /> 智能反欺诈检测</li>
                                <li><BarChart2Icon className="w-5 h-5" /> 信贷风险评估</li>
                                <li><ClipboardCheck className="w-5 h-5" /> 自动化合规审计</li>
                                <li><Zap className="w-5 h-5" /> 实时交易监控</li>
                            </ul>
                            <div className="solution-stats">
                                <div className="stat">
                                    <span className="stat-value">85%</span>
                                    <span className="stat-label">审批效率提升</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">60%</span>
                                    <span className="stat-label">风险识别率提升</span>
                                </div>
                            </div>
                            <a href="#case-finance" className="solution-link">了解更多 →</a>
                        </div>

                        {/* 智能制造 */}
                        <div className="solution-card featured">
                            <div className="featured-badge">热门</div>
                            <div className="solution-icon-wrapper manufacture">
                                <span className="solution-icon"><Factory className="w-5 h-5" /></span>
                            </div>
                            <h3 className="solution-name">智能制造</h3>
                            <p className="solution-desc">工业图纸解析、供应链文档管理、设备维护知识库，助力制造业数字化转型升级。</p>
                            <ul className="solution-features">
                                <li><Ruler className="w-5 h-5" /> CAD图纸智能解析</li>
                                <li><Wrench className="w-5 h-5" /> 设备维护知识库</li>
                                <li><Package className="w-5 h-5" /> 供应链文档管理</li>
                                <li><Bot className="w-5 h-5" /> 生产流程自动化</li>
                            </ul>
                            <div className="solution-stats">
                                <div className="stat">
                                    <span className="stat-value">70%</span>
                                    <span className="stat-label">图纸检索效率</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">40%</span>
                                    <span className="stat-label">维护成本下降</span>
                                </div>
                            </div>
                            <a href="#case-manufacturing" className="solution-link">了解更多 →</a>
                        </div>

                        {/* 法律与政务 */}
                        <div className="solution-card">
                            <div className="solution-icon-wrapper legal">
                                <span className="solution-icon"><Scale className="w-5 h-5" /></span>
                            </div>
                            <h3 className="solution-name">法律与政务</h3>
                            <p className="solution-desc">卷宗自动归档、法规政策语义检索、公文自动生成，打造智慧政务新标杆。</p>
                            <ul className="solution-features">
                                <li><Folder className="w-5 h-5" /> 卷宗智能归档</li>
                                <li><Search className="w-5 h-5" /> 法规语义检索</li>
                                <li><FileText className="w-5 h-5" /> 公文自动生成</li>
                                <li><Building2 className="w-5 h-5" /> 政务流程优化</li>
                            </ul>
                            <div className="solution-stats">
                                <div className="stat">
                                    <span className="stat-value">90%</span>
                                    <span className="stat-label">文档处理效率</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">50%</span>
                                    <span className="stat-label">人工成本节省</span>
                                </div>
                            </div>
                            <a href="#case-legal" className="solution-link">了解更多 →</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// Icons not imported in the top import statement
import {
    ShieldCheck, ClipboardCheck, BarChart2 as BarChart2Icon,
    Factory, Wrench, Package, Bot,
    Building2
} from "lucide-react";
