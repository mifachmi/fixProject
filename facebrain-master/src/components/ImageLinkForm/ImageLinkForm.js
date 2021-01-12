import React from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showFileChooser: false
		};
	}

	onClickShowFileChooser = (event) => {
		this.setState({ showFileChooser: true });
	}

	onClickShowUrl = (event) => {
		this.setState({ showFileChooser: false });
	}

	render() {
		const { onInputChange, onButtonSubmit, disableFind, input, onInputClear } = this.props;
		return (
			<div className="ma4 mt0">
				
				<p className="f3 b white">
					Tentukan Pilihan Anda!
				</p>
				<div className="center-content">
					<div className="form pa3 br3 shadow-5">
						<div data-toggle="buttons">
							<label className="f4 link ph3 pv2 dib white bg-mid-gray br3 mb2" onClick={this.onClickShowUrl}
								style={{marginRight: '5px'}}>
								<input type="radio" name="options" id="option1" defaultChecked />
								URL
							</label>
							<label className="f4 link ph3 pv2 dib white bg-mid-gray br3 mb2" onClick={this.onClickShowFileChooser}
								style={{marginLeft: '5px'}}>
								<input type="radio" name="options" id="option2" />
								UPLOAD
							</label>
						</div>
						{this.state.showFileChooser ?
							<div id="uploadComputer" className="mb2">
								<label className="f3 white">Choose a file </label>
								<input type="file" id="image" name="image" accept="image/*" onChange={onInputChange} />
							</div>
							: 
							<div>
								<input className="f4 pa2 w-100 center mb2" type="text" 
									value={input}
									onChange={onInputChange}
									onCut={onInputChange}
									onPaste={onInputChange}
									onInput={onInputChange} 
									placeholder="http://" />
							</div>
							}
						<button className="white b pv2 ph3 bn br2" onClick={onButtonSubmit} disabled={disableFind} style={{marginRight: '10px'}}>Find face</button>
						<button className="white b pv2 ph3 bn br2 bg-red" onClick={onInputClear} disabled={disableFind} style={{marginLeft: '10px'}}>Clear</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ImageLinkForm;