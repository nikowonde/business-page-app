import React, { Component } from 'react';
import ContantForm from './homepageComps/ContantForm';
import History from './homepageComps/History';
import Services from './homepageComps/Services';
import MoreServices from './homepageComps/MoreServices';
import OurWork from './homepageComps/OurWork';
import Skills from './homepageComps/Skills';
import Team from './homepageComps/Team';
import References from './homepageComps/References';
import Footer from './Footer';
import ThankYou from './thankYou';
import { getPosts } from './actions/actualActions';
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props) {
		super(props);
		this.topOfthePage = React.createRef();
		this.aboutUs = React.createRef();
	}
	componentDidMount() {
		window.addEventListener('scroll', this.barloadTrigger);
		this.props.getPosts();
	}

	componentWillUnmount() {}

	barloadTrigger = () => {
		if (
			document.body.scrollTop >= document.getElementById('skills').getBoundingClientRect().top + 300 ||
			document.documentElement.scrollTop >= document.getElementById('skills').getBoundingClientRect().top + 300
		) {
			this.barload();
		}
	};

	barload = () => {
		let width1 = 0;
		let width2 = 0;
		let width3 = 0;
		const frame = () => {
			if (width1 <= 75) {
				width1++;
				document.getElementById('skillBar1').style.width = width1 + '%';
				document.getElementById('skillsPerc1').innerHTML = width1 - 1 + '%';
			} else if (width2 <= 60) {
				width2++;
				document.getElementById('skillBar2').style.width = width2 + '%';
				document.getElementById('skillsPerc2').innerHTML = width2 - 1 + '%';
			} else if (width3 <= 90) {
				width3++;
				document.getElementById('skillBar3').style.width = width3 + '%';
				document.getElementById('skillsPerc3').innerHTML = width3 - 1 + '%';
			} else {
				clearInterval(id);
				window.removeEventListener('scroll', this.barloadTrigger);
			}
		};

		let id = setInterval(frame, 1);
	};

	render() {
		const scrollFunc = () => {
			this.aboutUs.current.scrollIntoView({
				behavior: 'smooth'
			});
		};
		const scrollTopFunc = () => {
			this.topOfthePage.current.scrollIntoView({
				behavior: 'smooth'
			});
		};
		return (
			<div className="main-content" ref={this.topOfthePage}>
				<ThankYou />
				<div className="landing-zone">
					<div className="cover" />
					<div className="intro-text">
						<h1>Welcome to Business Page</h1>
						<h3>An awesome and powerful business page</h3>
						<button className="button1" onClick={scrollFunc}>
							READ MORE
						</button>
					</div>
				</div>
				<div className="container" ref={this.aboutUs}>
					<h1 className="abtTitle">Who we are</h1>
					<p className="abtText">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet ullamcorper erat, id
						tempor leo auctor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. In hac habitasse platea dictumst. Phasellus tincidunt pretium tellus
					</p>
					<img
						src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1574&q=80"
						alt="filler"
						className="abtImg"
					/>
				</div>
				<History />
				<Services />
				<MoreServices />
				<OurWork />
				<Skills />
				<Team />
				<References />
				<div className="container" id="contact">
					<h1 className="contactTitle">Get in touch</h1>
					<div className="contactInfo">
						<p>+358 400 123 456</p>
						<p>contact@business.biz</p>
						<p>Torikatu 36, 90100 Oulu, Finland</p>
					</div>
					<ContantForm />
				</div>
				<img
					src="https://img.icons8.com/office/40/000000/circled-chevron-up.png"
					alt="scroll to top"
					style={{ position: 'fixed', right: '50px', bottom: '50px', zIndex: 10, cursor: 'pointer' }}
					onClick={(e) => scrollTopFunc(e)}
				/>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps, { getPosts })(Home);
