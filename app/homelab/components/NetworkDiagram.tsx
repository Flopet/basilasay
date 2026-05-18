import "./NetworkDiagram.css";
import {
  NetworkNode,
  NetworkConnection,
  NetworkTopology,
} from "@/lib/homelab-config";

function Node({ label, detail, cloud }: NetworkNode) {
  return (
    <div className={`network-node ${cloud ? "network-node--cloud" : ""}`}>
      <div className="network-node__label">{label}</div>
      {detail && <div className="network-node__detail">{detail}</div>}
    </div>
  );
}

function Connector({ label, bidirectional }: Omit<NetworkConnection, "from" | "to">) {
  if (bidirectional) {
    return (
      <div className="network-connector network-connector--bidirectional">
        <div className="network-connector__arrow-up" />
        <div className="network-connector__line" />
        <div className="network-connector__arrow" />
        {label && <span className="network-connector__label">{label}</span>}
      </div>
    );
  }

  return (
    <div className="network-connector">
      <div className="network-connector__line" />
      <div className="network-connector__arrow" />
      {label && <span className="network-connector__label">{label}</span>}
    </div>
  );
}

export function NetworkDiagram({ topology }: { topology: NetworkTopology }) {
  const { mainFlow, accessPaths } = topology;

  return (
    <div className="network-diagram">
      {/* Main vertical flow */}
      {mainFlow.nodes.map((node, index) => {
        const connection = mainFlow.connections.find((c) => c.to === node.id);
        return (
          <div key={node.id} className="network-flow-step">
            {index > 0 && connection && (
              <Connector label={connection.label} bidirectional={connection.bidirectional} />
            )}
            {/* First node has no incoming connection, just render a plain connector */}
            {index > 0 && !connection && <Connector />}
            <Node {...node} />
          </div>
        );
      })}

      {/* External access paths */}
      {accessPaths.length > 0 && (
        <div className="network-external">
          {accessPaths.map((path) => (
            <div key={path.title} className="network-external__path">
              <span className="network-external__label">{path.title}</span>
              {path.nodes.map((node, index) => {
                const connection = path.connections.find((c) => c.to === node.id);
                return (
                  <div key={node.id} className="network-flow-step">
                    {index > 0 && connection && (
                      <Connector label={connection.label} bidirectional={connection.bidirectional} />
                    )}
                    {index > 0 && !connection && <Connector />}
                    <Node {...node} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
