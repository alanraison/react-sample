var Greeter = React.createClass({
        getInitialState: function() {
            return {
                name: ''
            }
        },
        onUpdateNameGreeter: function(newName) {
            this.setState({
                name: newName
            });
        },
        render: function() {
            return <div>
            <h1>Welcome, can I take your name?</h1>
            <NameEntry name={this.state.name} onUpdateNameEntry={this.onUpdateNameGreeter}/>
            <DisplayName name={this.state.name}/>
            </div>;
        }
    }),
    NameEntry = React.createClass({
        onChangeEvent: function() {
            this.props.onUpdateNameEntry(
               React.findDOMNode(this.refs.name).value
            )
        },
        render: function() {
            return <form>
                    <input
                        type="text"
                        placeholder="Your name"
                        ref="name"
                        value={this.props.name}
                        onChange={this.onChangeEvent}/>
                </form>;
        }
    }),
    DisplayName = React.createClass({
        render: function() {
            return <p>Hi, <strong>{this.props.name}</strong>!</p>;
        }
    });


React.render(<Greeter/>, document.body);