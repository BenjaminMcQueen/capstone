import { Component } from "react";
import axios from "axios";
import "./css/attractions.css"


class CreateAttraction extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            website: '',
            imageURL: '',
            address: '',
            city: 'Cincinnati',
            state: 'Ohio',
            zipcode: '45201',
            indoors: false,
            childFriendly: false
        };
    }

    onChange(e) {
        switch (e.target.id) {
            case 'name':
                this.setState({ name: e.target.value });
                break;
            case 'description':
                this.setState({ description: e.target.value });
                break;
            case 'website':
                this.setState({ website: e.target.value });
                break;
            case 'imageURL':
                this.setState({ imageURL: e.target.value });
                break;
            case 'address':
                this.setState({ address: e.target.value });
                break;
            case 'city':
                this.setState({ city: e.target.value });
                break;
            case 'state':
                this.setState({ state: e.target.value });
                break;
            case 'zipcode':
                this.setState({ zipcode: e.target.value });
                break;
            case 'indoors':
                this.setState({ indoors: e.target.checked });
                break;
            case 'childFriendly':
                this.setState({ childFriendly: e.target.checked });
                break;
            default:
                console.log('unrecognized case: ', e.target.id);
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const attraction = {
            name: this.state.name,
            description: this.state.description,
            website: this.state.website,
            imageURL: this.state.imageURL,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            indoors: this.state.indoors,
            childFriendly: this.state.childFriendly
        };

        axios.post(process.env.REACT_APP_BACKEND + 'attractions/', attraction)
            .then(res => console.log(res.data));

        window.location = '/attractions';

        this.setState({
            name: '',
            description: '',
            website: '',
            imageURL: '',
            address: '',
            city: 'Cincinnati',
            state: 'Ohio',
            zipcode: '45201',
            indoors: false,
            childFriendly: false
        });
    }

    render() {
        return (
            <div>
                <h3>Submit an Attraction</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Name of attraction:</label>
                    <input type='text' id='name' required className='' value={this.state.name} onChange={this.onChange} />
                    <label>Descriptor for the attraction:</label>
                    <textarea id='description' className='' value={this.state.description} onChange={this.onChange}></textarea>
                    <label>Website of attraction (if applicable):</label>
                    <input type='text' id='website' className='' value={this.state.website} onChange={this.onChange} />
                    <label>Link to an image (not the image itself):</label>
                    <input type='text' id='imageURL' className='' value={this.state.imageURL} onChange={this.onChange} />
                    <label>Address of attraction:</label>
                    <input type='text' id='address' className='' value={this.state.address} onChange={this.onChange} />
                    <label>City of attraction:</label>
                    <input type='text' id='city' className='' value={this.state.city} onChange={this.onChange} />
                    <label>State of attraction:</label>
                    <input type='text' id='state' className='' value={this.state.state} onChange={this.onChange} />
                    <label>Zipcode of attraction:</label>
                    <input type='text' id='zipcode' className='' value={this.state.zipcode} onChange={this.onChange} />
                    <div className="attractions-details-checkbox-container">
                        <div className="indoors-checkbox attractions-details-checkbox">
                            <label>Is this an indoors attraction?</label>
                            <input type='checkbox' id='indoors' className='' value={this.state.indoors} onChange={this.onChange} />
                        </div>
                        <div className="child-checkbox attractions-details-checkbox">
                            <label>Is this a child friendly attraction?</label>
                            <input type='checkbox' id='childFriendly' className='' value={this.state.childFriendly} onChange={this.onChange} />
                        </div>
                    </div>

                    <input type="submit" value="Submit Attraction" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default CreateAttraction;