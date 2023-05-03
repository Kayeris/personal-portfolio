import React from "react";
import { Tooltip } from 'react-tooltip'
import "../styles/tools-n-tech.css";
import 'react-tooltip/dist/react-tooltip.css'

import androidStudio from "../assets/toolsntech/android-studio.png"
import Figma from "../assets/toolsntech/Figma-logo.svg"
import AndroidLogo from "../assets/toolsntech/android.png"
import Autodesk from "../assets/toolsntech/autodesk-suite.png"
import Bash from "../assets/toolsntech/bash.png"
import cPlus from "../assets/toolsntech/c++.png"
import cLang from "../assets/toolsntech/c.png"
import css from "../assets/toolsntech/css.png"
import Debian from "../assets/toolsntech/debian.png"
import Flutter from "../assets/toolsntech/flutter.png"
import git from "../assets/toolsntech/git logo.png"
import html from "../assets/toolsntech/html.png"
import intellij from "../assets/toolsntech/intellij.png"
import java from "../assets/toolsntech/java.png"
import javascript from "../assets/toolsntech/javascript.png"
import linux from "../assets/toolsntech/linux.png"
import nodejs from "../assets/toolsntech/nodejs.png"
import python from "../assets/toolsntech/python.png"
import react from "../assets/toolsntech/react.png"
import vscode from "../assets/toolsntech/vscode.png"
import webgl from "../assets/toolsntech/webgl.png"
import windows from "../assets/toolsntech/windows.png"
import adobecc from "../assets/toolsntech/adobe-cc.png"
import angular from "../assets/toolsntech/angular.png"
import docker from "../assets/toolsntech/docker.png"
import gimp from "../assets/toolsntech/gimp.png"
import kubernetes from "../assets/toolsntech/kubernetes.png"
// import lightroom from "../assets/toolsntech/lightroom.png"
import office from "../assets/toolsntech/office.png"
// import photoshop from "../assets/toolsntech/photoshop.png"
import plsql from "../assets/toolsntech/plsql.png"
import sass from "../assets/toolsntech/sass.png"
import tailwind from "../assets/toolsntech/tailwind-css.png"


function ToolsnTech() {
    return (
      <div className="tools-n-tech">
        <h2 className="tools-header">Tools & Technologies</h2>
        <div className="logo-grid">
          <Tooltip id="LogoTip" />
          <img className="logo-img" src={androidStudio} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Android Studio"/>
          <img className="logo-img" src={Figma} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Figma"/>
          <img className="logo-img" src={AndroidLogo} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Android"/>
          <img className="logo-img" src={Autodesk} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Autodesk"/>
          <img className="logo-img" src={Bash} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Bash"/>
          <img className="logo-img" src={cPlus} alt="" data-tooltip-id="LogoTip" data-tooltip-content="C++"/>
          <img className="logo-img" src={cLang} alt="" data-tooltip-id="LogoTip" data-tooltip-content="C"/>
          <img className="logo-img" src={css} alt="" data-tooltip-id="LogoTip" data-tooltip-content="CSS"/>
          <img className="logo-img" src={Debian} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Debian"/>
          <img className="logo-img" src={Flutter} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Flutter"/>
          <img className="logo-img" src={git} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Git"/>
          <img className="logo-img" src={html} alt="" data-tooltip-id="LogoTip" data-tooltip-content="HTML"/>
          <img className="logo-img" src={intellij} alt="" data-tooltip-id="LogoTip" data-tooltip-content="IntelliJ"/>
          <img className="logo-img" src={java} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Java"/>
          <img className="logo-img" src={javascript} alt="" data-tooltip-id="LogoTip" data-tooltip-content="JavaScript"/>
          <img className="logo-img" src={linux} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Linux"/>
          <img className="logo-img" src={nodejs} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Node.js"/>
          <img className="logo-img" src={python} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Python"/>
          <img className="logo-img" src={react} alt="" data-tooltip-id="LogoTip" data-tooltip-content="React"/>
          <img className="logo-img" src={vscode} alt="" data-tooltip-id="LogoTip" data-tooltip-content="VSCode"/>
          <img className="logo-img" src={webgl} alt="" data-tooltip-id="LogoTip" data-tooltip-content="WebGL"/>
          <img className="logo-img" src={windows} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Windows"/>
          <img className="logo-img" src={sass} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Sass"/>
          <img className="logo-img" src={plsql} alt="" data-tooltip-id="LogoTip" data-tooltip-content="PostgresSQL"/>
          <img className="logo-img" src={adobecc} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Adobe Creative Cloud"/>
          <img className="logo-img" src={angular} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Angular"/>
          <img className="logo-img" src={docker} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Docker"/>
          <img className="logo-img" src={tailwind} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Tailwind CSS"/>
          <img className="logo-img" src={kubernetes} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Kubernetes"/>
          <img className="logo-img" src={gimp} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Gimp"/>
          <img className="logo-img" src={office} alt="" data-tooltip-id="LogoTip" data-tooltip-content="Office Suite"/>
        </div>
      </div>
    );
  }
  
  export default ToolsnTech;