import Link from "next/link";
// import Image from "next/image"; // Prefer Next.js Image

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/assets/logo.png" alt="GradeLight" className="footer-logo-img" />
                            {/* <Image src="/assets/logo.png" alt="GradeLight" width={32} height={32} className="footer-logo-img" /> */}
                            <span>GradeLight</span>
                        </div>
                        <p className="footer-tagline">用 AI 重新定义企业办公</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h5>产品</h5>
                            <Link href="#">智能文档智搜</Link>
                            <Link href="#">图纸分析专家</Link>
                            <Link href="#">合规审批 Agent</Link>
                        </div>
                        <div className="footer-column">
                            <h5>解决方案</h5>
                            <Link href="#">金融科技</Link>
                            <Link href="#">智能制造</Link>
                            <Link href="#">法律与政务</Link>
                        </div>
                        <div className="footer-column">
                            <h5>关于我们</h5>
                            <Link href="#">公司介绍</Link>
                            <Link href="#">加入我们</Link>
                            <Link href="#">联系我们</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 GradeLight（梯度光年）. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link href="#">隐私政策</Link>
                        <Link href="#">服务条款</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
