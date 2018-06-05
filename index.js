import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
} from 'react-360';

import Entity from 'Entity'

export default class fluid_jb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rotY: 0, //deg
      scaleY: 1, // m
    }

    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    this.setState({ rotY: (this.state.rotY + 0.1) % 359, scaleY: 5 * Math.sin((Date.now() / 1000) * 1) })

    const raq = requestAnimationFrame(this.animate)
  }

  render() {
    return (
        <Entity
            style={{transform: [
                {translate: [0, 0, -2]},
                {rotateZ: 0},
                {rotateX: 90},
                {rotateY: this.state.rotY},
                {scale: [1, this.state.scaleY, 1]},
            ]}}
            source={{obj: asset('world.obj'), mtl: asset('world.mtl')}} />
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('fluid_jb', () => fluid_jb);
