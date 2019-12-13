import React, { Component } from 'react';
import { timeout } from 'q';

export default class LangaugeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
    }

    onChange(e) {
        let value = e.target.value;
        this.setState({ value: value }, () => typeof this.props.onUpdate === "function" ? this.props.onUpdate(value) : null)
    }

    render() {
        return (
            <div>
                {this.props.items.map(item => {
                    return (
                        <label style={{ padding: 18 }} key={item.value}>
                            <input
                                style={{ width: 20, height: 20 }}
                                type="radio"
                                checked={this.state.value == item.value}
                                disabled={item.disabled}
                                value={item.value}
                                name={this.props.name}
                                onChange={this.onChange.bind(this)}
                            />
                            <span style={{ fontSize: 28, marginLeft: 8 }}>{item.label}</span>
                        </label>
                    );
                })}
            </div>
        );
    }
}
