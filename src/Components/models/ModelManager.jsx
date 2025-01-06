import React from 'react';
import { Samsung24CameraChip } from './Samsung/s24/Samsung24CameraChip';
import { Samsung24Battery } from './Samsung/s24/Samsung24Battery';
import { Samsung24Chip } from './Samsung/s24/Samsung24Chip';
import { Samsung24FullBody } from './Samsung/s24/Samsung24FullBody.tsx';

import { Apple15Battery } from './Apple/iphone15/Apple15Battery';
import { Apple15Chip } from './Apple/iphone15/Apple15Chip';
import { Iphone15FullBody } from './Apple/iphone15/Iphone15FullBody.tsx';
import { Apple15CameraChip } from './Apple/iphone15/Apple15CameraChip';

import { Apple14Battery } from './Apple/iphone14/Apple14Battery.jsx';
import { Apple14FullBody } from './Apple/iphone14/Apple14FullBody.jsx';
import { Apple14Chip } from './Apple/iphone14/Apple14Chip.jsx';
import { Apple14Camera } from './Apple/iphone14/Apple14Camera.jsx';

import { Samsung23FullBody } from './Samsung/s23/Samsung23FullBody.jsx';
import { Samsung23Chip } from './Samsung/s23/Samsung23Chip.jsx';
import { Samsung23Battery } from './Samsung/s23/Samsung23Battery.jsx';
import { Samsung23CameraChip } from './Samsung/s23/Samsung23CameraChip.jsx';

import {Samsung8Battery} from './Samsung/s8/Samsung8Battery.jsx';
import {Samsung8Chip} from './Samsung/s8/Samsung8Chip.jsx';
import {Samsung8CameraChip} from './Samsung/s8/Samsung8CameraChip.jsx';
import {Samsung8FullBody} from './Samsung/s8/Samsung8FullBody.jsx';

import {AppleXBattery} from './Apple/iphonex/AppleXBattery.jsx';
import {AppleXChip} from './Apple/iphonex/AppleXChip.jsx';
import {AppleXCameraChip} from './Apple/iphonex/AppleXCameraChip.jsx';
import {AppleXFullBody} from './Apple/iphonex/AppleXFullBody.jsx';

import { Samsung1Battery } from './Samsung/s/Samsung1Battery.jsx';
import { Samsung1Chip } from './Samsung/s/Samsung1Chip.jsx';
import { Samsung1CameraChip } from './Samsung/s/Samsung1CameraChip.jsx';
import { Samsung1FullBody } from './Samsung/s/Samsung1FullBody.jsx';

import {Apple4Battery} from './Apple/iphone4/Apple4Battery.jsx';
import {Apple4Chip} from './Apple/iphone4/Apple4Chip.jsx';
import {Apple4Camera} from './Apple/iphone4/Apple4Camera.jsx';
import {Apple4FullBody} from './Apple/iphone4/Apple4FullBody.jsx';

export default class ModelManager {
  static getModels(year, section, setClickedMesh) {
    const configs = {
      "2024" : {
        fullbody: {
          models: [
            <Iphone15FullBody setClickedMesh={setClickedMesh} />,
            <Samsung24FullBody setClickedMesh={setClickedMesh} />
          ],
          positions: [[2, 4, 6], [2, 2, 10]],
          rotationLimits: [-Infinity, Infinity, -Infinity, Infinity]
        },
        chip: {
          models: [
            <Apple15Chip setClickedMesh={setClickedMesh} />,
            <Samsung24Chip setClickedMesh={setClickedMesh} />
          ],
          positions: [[2, 0, 0], [1.5, 0, 0]],
          rotationLimits: [0.01, Math.PI, 0.01, Math.PI]
        },
        battery: {
          models: [
            <Apple15Battery setClickedMesh={setClickedMesh} />,
            <Samsung24Battery setClickedMesh={setClickedMesh} />
          ],
          positions: [[-4, 0, 0], [6, 0, 0]],
          rotationLimits: [Math.PI, 2 * Math.PI, 0.01, Math.PI]
        },
        camera: {
          models: [
            <Apple15CameraChip setClickedMesh={setClickedMesh} />,
            <Samsung24CameraChip setClickedMesh={setClickedMesh} />
          ],
          positions: [[2, 0, 0], [5, 0, 0]],
          rotationLimits: [0.01, Math.PI, 0.01, Math.PI]
        }
      },
      "2023" : {
        fullbody: {
          models: [
            <Apple14FullBody setClickedMesh={setClickedMesh} />,
            <Samsung23FullBody setClickedMesh={setClickedMesh} />
          ],
          positions: [[0, 0, -1], [0, 0, .35]],
          rotationLimits: [-Infinity, Infinity, -Infinity, Infinity]
        },
        chip: {
          models: [
            <Apple14Chip setClickedMesh={setClickedMesh} />,
            <Samsung23Chip setClickedMesh={setClickedMesh} />
          ],
          positions: [[4, 0, 0], [7, 0, 0]],
          rotationLimits: [0.01, Math.PI, 0.01, Math.PI]
        },
        battery: {
          models: [
            <Apple14Battery setClickedMesh={setClickedMesh} />,
            <Samsung23Battery setClickedMesh={setClickedMesh} />
          ],
          positions: [[1.7, 0, 0], [1.5, 0, 0]],
          rotationLimits: [0.01, Math.PI, 0.01, Math.PI]
        },
        camera: {
          models: [
            <Apple14Camera setClickedMesh={setClickedMesh} />,
            <Samsung23CameraChip setClickedMesh={setClickedMesh} />
          ],
          positions: [[2, 0, 0], [2, 0, 0]],
          rotationLimits: [0.01, Math.PI, 0.01, Math.PI]
        }
      },
      "2017": {
        fullbody: {
          models: [
            <AppleXFullBody setClickedMesh={setClickedMesh} />,
            <Samsung8FullBody setClickedMesh={setClickedMesh} />
          ],
          positions: [[0, 0, 1], [0, 0, 16]],
          rotationLimits: [-Infinity, Infinity, -Infinity, Infinity]
        },
        chip: {
          models: [
            <AppleXChip setClickedMesh={setClickedMesh} />,
            <Samsung8Chip setClickedMesh={setClickedMesh} />
          ],
          positions: [[2, 0, 0], [4.5, 0, 0]],
          rotationLimits: [0.01, Math.PI, 0.01, Math.PI]
        },
        battery: {
          models: [
            <AppleXBattery setClickedMesh={setClickedMesh} />,
            <Samsung8Battery setClickedMesh={setClickedMesh} />
          ],
          positions: [[2, 0, 0], [6, 0, 0]],
          rotationLimits: [0.01, Math.PI, 0.01, Math.PI]
        },
        camera: {
          models: [
            <AppleXCameraChip setClickedMesh={setClickedMesh} />,
            <Samsung8CameraChip setClickedMesh={setClickedMesh} />
          ],
          positions: [[2, 0, 0], [5, 0, 0]],
          rotationLimits: [0.01, Math.PI, 0.01, Math.PI]
        }
      },
      "2010": {
        fullbody: {
          models: [
            <Apple4FullBody setClickedMesh={setClickedMesh} />,
            <Samsung1FullBody setClickedMesh={setClickedMesh} />
          ],
          positions: [[70, 0, 0], [8, 0, 0]],
          rotationLimits: [-Infinity, Infinity, -Infinity, Infinity]
        },
        chip: {
          models: [
            <Apple4Chip setClickedMesh={setClickedMesh} />,
            <Samsung1Chip setClickedMesh={setClickedMesh} />
          ],
          positions: [[2, 0, 0], [1.5, 0, 0]],
          rotationLimits: [0.01, Math.PI, 0.01, Math.PI]
        },
        battery: {
          models: [
            <Apple4Battery setClickedMesh={setClickedMesh} />,
            <Samsung1Battery setClickedMesh={setClickedMesh} />
          ],
          positions: [[2, 0, 0], [3, 0, 0]],
          rotationLimits: [Math.PI, 2 * Math.PI, 0.01, Math.PI]
        },
        camera: {
          models: [
            <Apple4Camera setClickedMesh={setClickedMesh} />,
            <Samsung1CameraChip setClickedMesh={setClickedMesh} />
          ],
          positions: [[2, 0, 0], [3, 0, 0]],
          rotationLimits: [0.01, Math.PI, 0.01, Math.PI]
        }
      }
    };

    return configs[year][section];
  }
}
