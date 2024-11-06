import React from "react";
import { Handle, Position } from '@xyflow/react';

import './style.css';

interface CustomNodeProps {
    data: {
        code: string;
        name: string;
    };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
    return (
        <div className="customNode">
            <strong>{data.code}</strong>
            <p>{data.name}</p>
            <Handle type="source" position={Position.Right} />
            <Handle type="target" position={Position.Left} />
        </div>
    );
};

export default CustomNode;
