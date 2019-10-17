import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix, classNames, toUrl} from '../utils';

export default class Banner extends React.Component {
    render() {
        return (
            <section id="banner">
                <div className="inner">
                    <h2>{_.get(this.props, 'pageContext.frontmatter.banner.title')}</h2>
                    {_.get(this.props, 'pageContext.frontmatter.banner.subtitle') && 
                        markdownify(_.get(this.props, 'pageContext.frontmatter.banner.subtitle'))
                    }
                    {_.get(this.props, 'pageContext.frontmatter.banner.actions') && 
                        <ul className="actions special">
                            {_.map(_.get(this.props, 'pageContext.frontmatter.banner.actions'), (action, action_idx) => (
                                <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                            ))}
                        </ul>
                    }
                </div>
                {_.get(this.props, 'pageContext.frontmatter.banner.bottom_link') && 
                    <Link to={(_.get(this.props, 'pageContext.frontmatter.banner.bottom_link.url').startsWith('#') ? _.get(this.props, 'pageContext.frontmatter.banner.bottom_link.url') : safePrefix(toUrl(this.props.pageContext.pages, _.get(this.props, 'pageContext.frontmatter.banner.bottom_link.url'))))} className={classNames({'more': _.get(this.props, 'pageContext.frontmatter.banner.bottom_link.has_arrow')}, {'scrolly': _.get(this.props, 'pageContext.frontmatter.banner.bottom_link.is_scrolly')})}>{_.get(this.props, 'pageContext.frontmatter.banner.bottom_link.label')}</Link>
                }
            </section>
        );
    }
}
