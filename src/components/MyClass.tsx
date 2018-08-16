import * as React from 'react';

export interface IMyClassProps {
    name?: string
    isMarried: boolean
}

export interface IMyClassState {
    age: number
}

class MyClass extends React.Component<IMyClassProps, IMyClassState> {
    public static defaultProps: Partial<IMyClassProps> = {
        name: "Andrew"
    }

    public state = {
        age: 21
    }

    public render() {
        return (
            <div className="App">
                <h1>{this.props.name}</h1>
            </div>
        );
  }
}

export default MyClass;
