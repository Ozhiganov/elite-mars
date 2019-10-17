import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <meta name="viewport" content="width=device-width, initialScale=1, userScalable=no" />
                    <noscript>{`<link rel="stylesheet" href=${safePrefix('assets/css/noscript.css')} />`}</noscript>
                    <body className={((_.get(this.props, 'pageContext.frontmatter.template') === _.get(this.props, 'pageContext.site.siteMetadata.landing_template')) ? 'landing ' : '')} />
                </Helmet>
                    <div id="page-wrapper">
                        <Header {...this.props} />
                        {this.props.children}
                        <Footer {...this.props} />
                    </div>
            </React.Fragment>
        );
    }
}
