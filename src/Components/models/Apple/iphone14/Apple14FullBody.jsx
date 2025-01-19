import React, { useMemo } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Apple14FullBody(props) {
  const { nodes, materials } = useGLTF('/models/apple/iphone14/fullBody.json')

  const appleLineMaterial = useMemo(() => {
      return new THREE.LineBasicMaterial({ color: 0xEE4B2B });
    }, []);

    const screenLineEnd = [0.4, -.2, -0.25];
    const frameLineEnd = [0.4, 0, -0.1];
    const backpanelLineEnd = [0.1, 0.5, .2];

    const screenLineGeometry = useMemo(() => {
        const points = [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(screenLineEnd[0], screenLineEnd[1], screenLineEnd[2]),
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return geometry;
      }, [])
    
      const frameLineGeometry = useMemo(() => {
        const points = [
          new THREE.Vector3(-.05, 0, 0),
          new THREE.Vector3(frameLineEnd[0], frameLineEnd[1], frameLineEnd[2]),
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return geometry
      }, [])
    
      const backpanelLineGeometry = useMemo(() => {
        const points = [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(backpanelLineEnd[0], backpanelLineEnd[1], backpanelLineEnd[2]),
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return geometry
      }, [])


  return (
    <group {...props} dispose={null}>
      <primitive object={new THREE.Line(screenLineGeometry, appleLineMaterial)} />
            <Html position={new THREE.Vector3(screenLineEnd[0] , screenLineEnd[1] * 0.7 , screenLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
                <div className='w-7 p-[1px] text-[2px] lineText'>
                  Super Retina XDR OLED
                </div>
            </Html>
      
            <primitive object={new THREE.Line(frameLineGeometry, appleLineMaterial)} />
            <Html position={new THREE.Vector3(frameLineEnd[0] * 1.3, frameLineEnd[1] * 1.3, frameLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
                <div className='w-7 p-[1px] text-[2px] lineText'>
                Surgical-Grade Stainless Steel
                </div>
            </Html>
      
            <primitive object={new THREE.Line(backpanelLineGeometry, appleLineMaterial)} />
            <Html position={new THREE.Vector3(backpanelLineEnd[0] * 1, backpanelLineEnd[1] * 1.1, backpanelLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
                <div className='w-7 p-[1px] text-[2px] lineText'>
                 Ceramic Shield
                </div>
            </Html>
      <group position={[0, -0.237, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2.888}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.UCttAeyROPsgmix.geometry} material={materials.KtvhjlxyToKjYkE} />
          <mesh geometry={nodes.rrqFqyfckTuyRuI.geometry} material={materials.CSNzlRnZuvCyxNL} />
          <mesh geometry={nodes.XbtrdVaOWYmkEiU.geometry} material={materials.YiceMpFVTpnmoaq} />
          <mesh geometry={nodes.YbXWdqEcjbfTKuN_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.AbxQOpRbGREHXRG.geometry} material={materials.IDdMwJVCyuFpUnA} />
          <mesh geometry={nodes.alSOKOYgFKIcUtR.geometry} material={materials.sWxYOtHGWTcXRMx} />
          <mesh geometry={nodes.FjhETOCBEeiBmch.geometry} material={materials.KtvhjlxyToKjYkE} />
          <mesh geometry={nodes.lxsKwuOPNvmzBKg_0.geometry} material={materials.KhJiSWFcsscOusf} />
          <mesh geometry={nodes.tWfjYtMZCfucxRt.geometry} material={materials.fdfRsQCrfvPBPfQ} />
          <mesh geometry={nodes.aYjPeBrpBRopJbp.geometry} material={materials.xHgtbqndQshkTKG} />
          <mesh geometry={nodes.BeQtuLXtpSTrzAH.geometry} material={materials.initialShadingGroup} />
          <mesh geometry={nodes.KUDomTaVduCyevu.geometry} material={materials.KtvhjlxyToKjYkE} />
          <mesh geometry={nodes.QaGkMzxNzKPcqRy.geometry} material={materials.iEhZxWeNLTDdgxm} />
          <mesh geometry={nodes.QOfJIBEXOvXfSUh.geometry} material={materials.vsSJQngPxBJTVZb} />
          <mesh geometry={nodes.RUMRNTkptJGDMpy.geometry} material={materials.LJBezuBxKRoHnAp} />
          <mesh geometry={nodes.BDLCJBydsNjizog_0.geometry} material={materials.fGwijctGaiRaYJC} />
          <mesh geometry={nodes.GWEiavWnRxbogtw_0.geometry} material={materials.FsunUcGyajFpQmW} />
          <mesh geometry={nodes.JUTNJcWwqyxbGDZ_0.geometry} material={materials.LJBezuBxKRoHnAp} />
          <mesh geometry={nodes.PLFTnNQeqVAxicS.geometry} material={materials.BLpVAsLWNICZYGG} />
          <mesh geometry={nodes.RFqaqXLpuCDBIGV_0.geometry} material={materials.nJRBoEsOhzMSqCz} />
          <mesh geometry={nodes.tWBbDznHihIxXam.geometry} material={materials.OStzgRHtVBLWwiD} />
          <mesh geometry={nodes.aVmapfDgqkPkjUf.geometry} material={materials.WqbAhnIPgrrhfXS} />
          <mesh geometry={nodes.CAQeTxdpUcbxQyT.geometry} material={materials.KtvhjlxyToKjYkE} />
          <mesh geometry={nodes.lgnGJJmNebyRbHq_0.geometry} material={materials.rNCplyWedyfORFh} />
          <mesh geometry={nodes.qsTxqfACkdoWeLQ.geometry} material={materials.IBtgGxCVyZhjKZM} />
          <mesh geometry={nodes.tQCDizUpBYNcvFA.geometry} material={materials.LtesZnUOMbBEAoi} />
          <mesh geometry={nodes.zPPSOvNamLQVyvv.geometry} material={materials.qEGySvwsouNnVcn} />
          <mesh geometry={nodes.MoTJNOoMxqdxNvQ.geometry} material={materials.IBtgGxCVyZhjKZM} />
          <mesh geometry={nodes.mZxrNiCtMrMjOMv.geometry} material={materials.WqbAhnIPgrrhfXS} />
          <mesh geometry={nodes.YPGjoywokSeoQFr.geometry} material={materials.KtvhjlxyToKjYkE} />
          <mesh geometry={nodes.rJeCWUNsVVXXAbI.geometry} material={materials.psePdsxZprlxGrw} />
          <mesh geometry={nodes.rqSonbcVVSPWFfa_0.geometry} material={materials.jFPFAvCbiqflbQV} />
          <mesh geometry={nodes.vauUojKrKkLLDtY.geometry} material={materials.HvAGJeQTAiWbceX} />
          <mesh geometry={nodes.wjSYkRykuFHJNPw.geometry} material={materials.KxzouvBYEgdZhMo} />
          <mesh geometry={nodes.yqmgDmvGsmuPwXx_0.geometry} material={materials.bmOZLlCkCKhIIVe} />
          <mesh geometry={nodes.dNDonqESZOxUcei_0.geometry} material={materials.LUbRMhkIhuekQRK} />
          <mesh geometry={nodes.IuMgFUHIyRWENxG_0.geometry} material={materials.LcWBQfBvCzxThpp} />
          <mesh geometry={nodes.nJYGEbPQybRBbiN.geometry} material={materials.tDZQoaroJfCIQtF} />
          <mesh geometry={nodes.RGbIswEcCTzqNsn_0.geometry} material={materials.FlDKBWPodPcEeGy} />
          <mesh geometry={nodes.XeFHhVBtRZWPGxR.geometry} material={materials.tfbCjiZQaZkmtHx} />
          <mesh geometry={nodes.JyAbjubWrOdfygC_0.geometry} material={materials.jFPFAvCbiqflbQV} />
          <mesh geometry={nodes.nxFoHsySvfcSLvp.geometry} material={materials.KtvhjlxyToKjYkE} />
          <mesh geometry={nodes.oCklTGvTZoDWJrC_0.geometry} material={materials.tfbCjiZQaZkmtHx} />
          <mesh geometry={nodes.BhvzCWikxrVeDTV.geometry} material={materials.LtesZnUOMbBEAoi} />
          <mesh geometry={nodes.DLfIUIalXuQjJsL.geometry} material={materials.pBMikDFQfUOsKkr} />
          <mesh geometry={nodes.ePYqawqlCJbCsNi.geometry} material={materials.CSNzlRnZuvCyxNL} />
          <mesh geometry={nodes.FaUtifOQSMTXiZM.geometry} material={materials.KtvhjlxyToKjYkE} />
          <mesh geometry={nodes.FGDSbHbILfUmiaH.geometry} material={materials.tfbCjiZQaZkmtHx} />
          <mesh geometry={nodes.jQXfQpudiYObSGp.geometry} material={materials.sWxYOtHGWTcXRMx} />
          <mesh geometry={nodes.KABLQLZRuEbcLWk.geometry} material={materials.fdfRsQCrfvPBPfQ} />
          <mesh geometry={nodes.knexoFNknstHgiO.geometry} material={materials.KtvhjlxyToKjYkE} />
          <mesh geometry={nodes.MMkajxMNWrwGQfi.geometry} material={materials.LtesZnUOMbBEAoi} />
          <mesh geometry={nodes.OMkeKbwVHRBkBwM.geometry} material={materials.IkWzRHNnDaKQXIi} />
          <mesh geometry={nodes.qjXEDwnnBYwWcJn.geometry} material={materials.tfbCjiZQaZkmtHx} />
          <mesh geometry={nodes.YnrVhXEUDbStWCs.geometry} material={materials.EJpkIDZfhPDUzel} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/apple/iphone14/fullBody.json')