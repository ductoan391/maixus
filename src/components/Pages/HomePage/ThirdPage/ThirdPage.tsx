import "./thirdPage.scss";
import { useTranslation } from "react-i18next";
function PageThree() {
    const { t } = useTranslation();
    return (
        <div className="page-three">
            <div className="page-three-container">
                <div className="page-three-content">
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_first">Product</p>
                            <p className="desc">{t("third.desc.product.text")}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_second">Technology</p>
                            <p className="desc">{t("home.thirdPage.technology.text")}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_third">Application</p>
                            <p className="desc">{t("home.thirdPage.application.text")}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_fourth note">Block Chain</p>
                            <p className="desc">{t("home.thirdPage.blockchain.text")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageThree;