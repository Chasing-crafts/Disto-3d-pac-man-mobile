import * as THREE from 'three';

export const updateCamera = (camera, player, cameraAngle, xDir, zDir) => {
  if (cameraAngle === 1) {
    camera.position.x = player.position.x;
    camera.position.y = player.position.y + 0.5;
    camera.position.z = player.position.z;
    camera.lookAt(player.position.x + xDir, 0.75, player.position.z + zDir);
  }

  if (cameraAngle === 2) {
    camera.position.x = player.position.x;
    camera.position.y = 15;
    camera.position.z = player.position.z;
    camera.lookAt(player.position);
  }

  if (cameraAngle === 3) {
    const relativeCameraOffset = new THREE.Vector3(0, 4, 3);
    const cameraOffset = relativeCameraOffset.applyMatrix4(player.matrixWorld);
    camera.position.copy(cameraOffset);
    camera.lookAt(player.position);
  }
};
