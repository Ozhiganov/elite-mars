import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify, Link} from '../utils';

/* eslint-disable */

export default class Elements extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <article id="main">
                    <header>
                        <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                        {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </header>
                    <section className="wrapper style5">
                        <div className="inner">
                            <section>
                                <h4>Text</h4>
                                <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                                    This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                                    This is <u>underlined</u> and this is code: <code>for (;;) &#123; ... &#125;</code>. Finally, <Link to="#">this is a link</Link>.</p>
                                <hr />
                                <header>
                                    <h4>Heading with a Subtitle</h4>
                                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <header>
                                    <h5>Heading with a Subtitle</h5>
                                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <hr />
                                <h2>Heading Level 2</h2>
                                <h3>Heading Level 3</h3>
                                <h4>Heading Level 4</h4>
                                <h5>Heading Level 5</h5>
                                <h6>Heading Level 6</h6>
                                <hr />
                                <h5>Blockquote</h5>
                                <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
                                <h5>Preformatted</h5>
                                <pre><code>{`i = 0;\n\nwhile (!deck.isInOrder()) {\n  print 'Iteration ' + i;\n  deck.shuffle();\n  i++;\n}\n\nprint 'It took ' + i + ' iterations to sort the deck.';`}</code></pre>
                            </section>
                            <section>
                                <h4>Lists</h4>
                                <div className="row">
                                    <div className="col-6 col-12-medium">
                                        <h5>Unordered</h5>
                                        <ul>
                                            <li>Dolor pulvinar etiam.</li>
                                            <li>Sagittis adipiscing.</li>
                                            <li>Felis enim feugiat.</li>
                                        </ul>
                                        <h5>Alternate</h5>
                                        <ul className="alt">
                                            <li>Dolor pulvinar etiam.</li>
                                            <li>Sagittis adipiscing.</li>
                                            <li>Felis enim feugiat.</li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <h5>Ordered</h5>
                                        <ol>
                                            <li>Dolor pulvinar etiam.</li>
                                            <li>Etiam vel felis viverra.</li>
                                            <li>Felis enim feugiat.</li>
                                            <li>Dolor pulvinar etiam.</li>
                                            <li>Etiam vel felis lorem.</li>
                                            <li>Felis enim et feugiat.</li>
                                        </ol>
                                        <h5>Icons</h5>
                                        <ul className="icons">
                                            <li><Link to="#" className="icon fa-twitter"><span className="label">Twitter</span></Link></li>
                                            <li><Link to="#" className="icon fa-facebook"><span className="label">Facebook</span></Link></li>
                                            <li><Link to="#" className="icon fa-instagram"><span className="label">Instagram</span></Link></li>
                                            <li><Link to="#" className="icon fa-github"><span className="label">Github</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <h5>Actions</h5>
                                <div className="row">
                                    <div className="col-6 col-12-medium">
                                        <ul className="actions">
                                            <li><Link to="#" className="button primary">Default</Link></li>
                                            <li><Link to="#" className="button">Default</Link></li>
                                        </ul>
                                        <ul className="actions small">
                                            <li><Link to="#" className="button primary small">Small</Link></li>
                                            <li><Link to="#" className="button small">Small</Link></li>
                                        </ul>
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary">Default</Link></li>
                                            <li><Link to="#" className="button">Default</Link></li>
                                        </ul>
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary small">Small</Link></li>
                                            <li><Link to="#" className="button small">Small</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary fit">Default</Link></li>
                                            <li><Link to="#" className="button fit">Default</Link></li>
                                        </ul>
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary small fit">Small</Link></li>
                                            <li><Link to="#" className="button small fit">Small</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h4>Table</h4>
                                <h5>Default</h5>
                                <div className="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item One</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Two</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Three</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Four</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Five</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2" />
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <h5>Alternate</h5>
                                <div className="table-wrapper">
                                    <table className="alt">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item One</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Two</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Three</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Four</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Five</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2" />
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </section>
                            <section>
                                <h4>Buttons</h4>
                                <ul className="actions">
                                    <li><Link to="#" className="button primary">Primary</Link></li>
                                    <li><Link to="#" className="button">Default</Link></li>
                                </ul>
                                <ul className="actions">
                                    <li><Link to="#" className="button large">Large</Link></li>
                                    <li><Link to="#" className="button">Default</Link></li>
                                    <li><Link to="#" className="button small">Small</Link></li>
                                </ul>
                                <ul className="actions fit">
                                    <li><Link to="#" className="button fit">Fit</Link></li>
                                    <li><Link to="#" className="button primary fit">Fit</Link></li>
                                    <li><Link to="#" className="button fit">Fit</Link></li>
                                </ul>
                                <ul className="actions fit small">
                                    <li><Link to="#" className="button primary fit small">Fit + Small</Link></li>
                                    <li><Link to="#" className="button fit small">Fit + Small</Link></li>
                                    <li><Link to="#" className="button primary fit small">Fit + Small</Link></li>
                                </ul>
                                <ul className="actions">
                                    <li><Link to="#" className="button primary icon fa-download">Icon</Link></li>
                                    <li><Link to="#" className="button icon fa-download">Icon</Link></li>
                                </ul>
                                <ul className="actions">
                                    <li><span className="button primary disabled">Disabled</span></li>
                                    <li><span className="button disabled">Disabled</span></li>
                                </ul>
                            </section>
                            <section>
                                <h4>Form</h4>
                                <form method="post" action="#">
                                    <div className="row gtr-uniform">
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                                        </div>
                                        <div className="col-12">
                                            <select name="demo-category" id="demo-category">
                                                <option value="">- Category -</option>
                                                <option value="1">Manufacturing</option>
                                                <option value="1">Shipping</option>
                                                <option value="1">Administration</option>
                                                <option value="1">Human Resources</option>
                                            </select>
                                        </div>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-low" name="demo-priority" checked/>
                                            <label htmlFor="demo-priority-low">Low</label>
                                        </div>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-normal" name="demo-priority"/>
                                            <label htmlFor="demo-priority-normal">Normal</label>
                                        </div>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-high" name="demo-priority"/>
                                            <label htmlFor="demo-priority-high">High</label>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <input type="checkbox" id="demo-copy" name="demo-copy"/>
                                            <label htmlFor="demo-copy">Email me a copy</label>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <input type="checkbox" id="demo-human" name="demo-human" checked/>
                                            <label htmlFor="demo-human">Not a robot</label>
                                        </div>
                                        <div className="col-12">
                                            <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6" />
                                        </div>
                                        <div className="col-12">
                                            <ul className="actions">
                                                <li><input type="submit" value="Send Message" className="primary" /></li>
                                                <li><input type="reset" value="Reset" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </section>
                            <section>
                                <h4>Image</h4>
                                <h5>Fit</h5>
                                <div className="box alt">
                                    <div className="row gtr-50 gtr-uniform">
                                        <div className="col-12"><span className="image fit"><img src="images/banner.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                                    </div>
                                </div>
                                <h5>Left &amp; Right</h5>
                                <p><span className="image left"><img src="images/pic04.jpg" alt="" /></span>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien. Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p>
                                <p><span className="image right"><img src="images/pic05.jpg" alt="" /></span>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius. Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat. Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui.</p>
                            </section>
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
