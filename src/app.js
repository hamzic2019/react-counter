const appRoot = document.querySelector("#app");


class App extends React.Component {
    constructor(props){
        super(props);
        this.lowerCount = this.lowerCount.bind(this);
        this.addCount = this.addCount.bind(this);
        this.state = {
            count: 0,
            animation: 'counter'
        }
    }

    lowerCount() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
                animation: prevState.animation += ' lower-animation'
            }
        });

        setTimeout(() => {
            this.setState((prevState) => {
                return {
                   
                    animation: 'counter'
                }
            });
        }, 1000)
    }

    addCount() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
                animation: prevState.animation += ' higher-animation'
            }
        });
        setTimeout(() => {
            this.setState((prevState) => {
                return {
                   
                    animation: 'counter'
                }
            });
        }, 1000)
    }
    render() {
        return(
            <div className="container">
                <button onClick={this.lowerCount} className="lower">{'<'}</button>
                <button className={this.state.animation}>{this.state.count}</button>
                <button onClick={this.addCount} className="higher">{'>'}</button>
            </div>
        );
    }
    
}



ReactDOM.render(<App />, appRoot);