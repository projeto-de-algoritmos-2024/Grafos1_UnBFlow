import React, { useCallback } from 'react';
import {
    ReactFlow,
    Controls,
    useNodesState,
    useEdgesState,
    addEdge,
} from '@xyflow/react';
import CustomNode from '../CustomNode';

import '@xyflow/react/dist/style.css';
import './style.css';

const initalNodes = [
    { id: '1', position: { x: 10, y: 10 }, data: { code: 'MAT101', name: 'Matemática Básica Aplicada a Engenharia de Software' }, type: 'custom' },   
    { id: '2', position: { x: 100, y: 100 }, data: { code: 'FIS201', name: 'Física Geral' }, type: 'custom'},
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes = {
    custom: CustomNode,
};

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
                nodeTypes={nodeTypes}
            >
                <Controls />
            </ReactFlow>

        </div>
    );
}

export default GraphCanvas;