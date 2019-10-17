import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify, Link, safePrefix, classNames} from '../utils';

export default class Cta extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + _.get(this.props, 'section.background_style')}>
                <div className="inner">
                    <header>
                        <h2>{htmlToReact(_.get(this.props, 'section.title').replace(/\n/g, '<br />'))}</h2>
                        {markdownify(_.get(this.props, 'section.text'))}
                    </header>
                    {_.get(this.props, 'section.actions') && 
                        <ul className="actions stacked">
                            {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                                <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', 'fit', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        );
    }
}
