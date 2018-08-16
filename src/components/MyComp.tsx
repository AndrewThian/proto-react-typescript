import * as React from 'react';

interface IMyCompProps {
    name?: string
}

const defaultProps: IMyCompProps = {
    name: "Andrew"
}

const MyComp:React.SFC<IMyCompProps> = props => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

MyComp.defaultProps = defaultProps

export default MyComp