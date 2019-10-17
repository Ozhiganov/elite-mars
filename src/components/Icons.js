import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class Icons extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + _.get(this.props, 'section.background_style') + ' special'}>
                <div className="inner">
                    <header className="major">
                        <h2>{htmlToReact(_.get(this.props, 'section.title').replace(/\n/g, '<br />'))}</h2>
                        {markdownify(_.get(this.props, 'section.subtitle'))}
                    </header>
                    {_.get(this.props, 'section.feature_icons') && 
                        <ul className="icons major">
                            {_.map(_.get(this.props, 'section.feature_icons'), (item, item_idx) => (
                                <li key={item_idx}><span className={'icon ' + _.get(item, 'icon') + ' major ' + _.get(item, 'style')}><span className="label">{_.get(item, 'title')}</span></span></li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        );
    }
}
