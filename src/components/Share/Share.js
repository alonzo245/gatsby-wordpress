import React, { Component } from 'react';
import './Share.scss';

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
                <h2>
                     שיתוף כתבה
                </h2>
                <ul>
                    <li><WhatsappShareButton url={window.location.href} >
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    </li>
                    <li><FacebookShareButton 
                    hashtag={'#pepper'}
                    url={window.location.href} >
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    </li>
                    <li><TelegramShareButton url={window.location.href} >
                        <TelegramIcon size={32} round={true} />
                    </TelegramShareButton>
                    </li>
                    <li><TwitterShareButton url={window.location.href} >
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    </li>
                    <li><LinkedinShareButton url={window.location.href} >
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                    </li>
                    <li><EmailShareButton 
                    subject={ `Pepper Bank - ${this.props.article.metaTagTitle}`}
                    body={ `${window.location.href} \n ${this.props.article.summary}`}
                    url={window.location.href} >
                        <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Share;