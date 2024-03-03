import React, { useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function Engine(props) {
  const { nodes, materials } = useGLTF("/static/engine.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder037.geometry}
        material={materials["Material.061"]}
        position={[3.836, -0.422, -3.146]}
        rotation={[0, 0, -0.836]}
        scale={[0.406, 0.181, 0.406]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder036.geometry}
        material={nodes.Cylinder036.material}
        position={[1.815, 0.432, -0.947]}
        rotation={[0, 0, -0.744]}
        scale={[0.763, 0.61, 0.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder035.geometry}
        material={nodes.Cylinder035.material}
        position={[1.454, 0.116, -2.902]}
        rotation={[0, 0, -0.744]}
        scale={[0.763, 0.61, 0.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder034.geometry}
        material={nodes.Cylinder034.material}
        position={[1.579, 0.002, 1.122]}
        rotation={[0, 0, -0.744]}
        scale={[0.763, 0.61, 0.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder033.geometry}
        material={nodes.Cylinder033.material}
        position={[1.907, 0.359, 3.1]}
        rotation={[0, 0, -0.744]}
        scale={[0.763, 0.61, 0.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder032.geometry}
        material={nodes.Cylinder032.material}
        position={[-1.403, 0.515, 3.1]}
        rotation={[0, 0, 0.827]}
        scale={[0.763, 0.61, 0.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031.geometry}
        material={nodes.Cylinder031.material}
        position={[-1.046, 0.186, 1.122]}
        rotation={[0, 0, 0.827]}
        scale={[0.763, 0.61, 0.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030.geometry}
        material={nodes.Cylinder030.material}
        position={[-1.046, 0.186, -2.879]}
        rotation={[0, 0, 0.827]}
        scale={[0.763, 0.61, 0.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029.geometry}
        material={nodes.Cylinder029.material}
        position={[-1.403, 0.515, -0.912]}
        rotation={[0, 0, 0.827]}
        scale={[0.763, 0.61, 0.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028.geometry}
        material={nodes.Cylinder028.material}
        position={[0.007, -2.494, -0.31]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.113, 0.811, 0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder027.geometry}
        material={nodes.Cylinder027.material}
        position={[0.648, -1.901, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026.geometry}
        material={nodes.Cylinder026.material}
        position={[-0.783, -3.633, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025.geometry}
        material={nodes.Cylinder025.material}
        position={[1.213, -2.751, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024.geometry}
        material={nodes.Cylinder024.material}
        position={[1.163, -3.351, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={nodes.Cylinder023.material}
        position={[2.009, -0.708, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={nodes.Cylinder022.material}
        position={[2.358, -0.174, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={nodes.Cylinder021.material}
        position={[1.322, 0.885, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={nodes.Cylinder020.material}
        position={[0.599, 0.474, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={nodes.Cylinder019.material}
        position={[0.38, -0.218, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={nodes.Cylinder018.material}
        position={[-0.953, 0.709, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={nodes.Cylinder017.material}
        position={[-1.021, -0.013, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={nodes.Cylinder015.material}
        position={[-0.458, -0.17, -4.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.101, 0.034, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["Material.058"]}
        position={[1.307, -2.664, -4.988]}
        rotation={[0, 0, 0.707]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["Material.058"]}
        position={[1.032, -3.387, -5.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials["Material.058"]}
        position={[-0.874, -1.892, -4.613]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.477, 0.088, 0.477]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={nodes.Cylinder013.material}
        position={[-1.981, -2.469, -4.545]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.447, 0.083, 0.447]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.058"]}
        position={[-1.981, -2.469, -4.697]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.447, 0.083, 0.447]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["Material.058"]}
        position={[2.254, -1.694, -5.04]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.709, 0.131, 0.709]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials["Material.035"]}
        position={[0.8, 2.125, -3.911]}
        rotation={[-Math.PI, 0, 0]}
        scale={-3.675}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.061"]}
        position={[2.353, 1.113, 0.039]}
        rotation={[0, 0, -0.787]}
        scale={[1, 1, 5.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.061"]}
        position={[-2.06, 1.113, 0.039]}
        rotation={[0, 0, 0.784]}
        scale={[1, 1, 5.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials["Material.058"]}
        position={[0.122, 0.598, -3.827]}
        scale={0.543}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["Material.061"]}
        position={[-2.17, -0.422, -3.146]}
        rotation={[0, 0, -0.836]}
        scale={[0.406, 0.181, 0.406]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
        position={[0, -1.291, -4.827]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.496, 0.172, 0.496]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.061"]}
        position={[0.96, -0.511, -3.556]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.927, -1, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["Material.001"]}
        position={[-1.585, 1.35, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.062"]}
        position={[-0.044, -0.541, -3.235]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.416}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.060"]}
        position={[-0.009, 0.459, -4.367]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.647, 0.12, 0.647]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.058"]}
        position={[1.406, 0.223, -4.483]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.837, 0.155, 0.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.058"]}
        position={[0.04, -1.308, -4.879]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.858, 0.159, 0.858]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.058"]}
        position={[0.156, -2.643, -4.93]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.725, 0.134, 0.725]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.062"]}
        position={[2.254, -1.694, -4.973]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.709, 0.131, 0.709]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.058"]}
        position={[-1.883, -0.452, -4.696]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.694, 0.129, 0.694]}
      />
    </group>
  );
}

useGLTF.preload("static/engine.gltf");

