import React, { useCallback } from 'react';
import {
    ReactFlow,
    Controls,
    useNodesState,
    useEdgesState,
    addEdge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import './style.css';

const initalNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },   
    { id: '2', position: { x: 100, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function GraphCanvas() {
    const [nodes, setNodes, onNodesChanges] = useNodesState(initalNodes);
    const [edges, setEdges, onEdgesChanges] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params : any) => setEdges((eds) => 
        addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div className='graph'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChanges}
                onEdgesChange={onEdgesChanges}
                onConnect={onConnect}
            >
                <Controls />
            </ReactFlow>

        </div>
    );
}

export default GraphCanvas;