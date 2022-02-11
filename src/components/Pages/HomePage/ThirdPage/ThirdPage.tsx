import "./thirdPage.scss";
import { useTranslation } from "react-i18next";
import i18n from '../../../../i18n';

function PageThree() {
    const { t } = useTranslation();
    const dataList = t('thirdPage', { returnObjects: true }) as any;

    return (
        <div className="page-three">

            <div className="page-three-container">
                <div className="page-three-content">
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_first">Product</p>
                            <p className="desc">{dataList.product.text}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_second">Technology</p>
                            <p className="desc">{dataList.technology.text}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_third">Application</p>
                            <p className="desc">{dataList.application.text}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_fourth note">Block Chain</p>
                            <p className="desc">{dataList.blockchain.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageThree;