import React, { Component } from 'react';
import './Share.css';

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
                    <li><WhatsappShareButton url={this.props.link} >
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    </li>
                    <li><FacebookShareButton 
                    hashtag={'#pepper'}
                    url={this.props.link} >
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    </li>
                    <li><TelegramShareButton url={this.props.link} >
                        <TelegramIcon size={32} round={true} />
                    </TelegramShareButton>
                    </li>
                    <li><TwitterShareButton url={this.props.link} >
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    </li>
                    <li><LinkedinShareButton url={this.props.link} >
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                    </li>
                    <li><EmailShareButton 
                    subject={ `Pepper Bank - ${this.props.article.metaTagTitle}`}
                    body={ `${this.props.link} \n ${this.props.article.summary}`}
                    url={this.props.link} >
                        <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Share;