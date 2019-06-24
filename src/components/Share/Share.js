import React, { Component } from 'react';
import './Share.css';
import siteConfig from '../../sits-config/site-config'

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    EmailShareButton
} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    EmailIcon,
} from 'react-share';

class Share extends Component {


    render() {
        return (
            
            <section className="share">
                {console.log('siteConfig', siteConfig)}
                {console.log('sare', this.props)}
                <h2>
                     שיתוף כתבה
                </h2>
                <ul>
                    <li><WhatsappShareButton url={`${siteConfig.siteBaseUrl}${this.props.article.slug}`} >
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    </li>
                    <li><FacebookShareButton 
                    hashtag={'#pepper'}
                    url={`${siteConfig.siteBaseUrl}${this.props.article.slug}`} >
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    </li>
                    <li><TelegramShareButton url={`${siteConfig.siteBaseUrl}${this.props.article.slug}`} >
                        <TelegramIcon size={32} round={true} />
                    </TelegramShareButton>
                    </li>
                    <li><TwitterShareButton url={`${siteConfig.siteBaseUrl}${this.props.article.slug}`} >
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    </li>
                    <li><LinkedinShareButton url={`${siteConfig.siteBaseUrl}${this.props.article.slug}`} >
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                    </li>
                    <li><EmailShareButton 
                    subject={ `Pepper Bank - ${this.props.article.metaTagTitle}`}
                    body={ `${`${siteConfig.siteBaseUrl}${this.props.article.slug}`} \n ${this.props.article.summary}`}
                    url={`${siteConfig.siteBaseUrl}${this.props.article.slug}`} >
                        <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Share;