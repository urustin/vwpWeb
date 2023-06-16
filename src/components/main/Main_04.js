import React from 'react';
import styles from './Main_04.module.css';
import data from '../textData';
import Link from 'next/link';

const ProjectItem = ({index,name,category})=>{
    return (
        <>
        <div className={styles.projectItem} key={index}>
            {/* <div>{index}</div> */}
            <div className={styles.projectTag}>
                <h2 className={styles.projectName}>{name}</h2>
                <h4 className={styles.projectCategory}>{category}</h4>
            </div>
        </div>
        </>
    )
}

const ProjectList = ()=>{
    return (
        <>
        <div className={styles.projectBox}>
            <ProjectItem index="1" name="Carbonised Wool" category="What We Do"/>
            <ProjectItem index="2" name="Greasy Wool" category="What We Do"/>
            {/* <ProjectItem index="3" name="name3" category="What We Do"/> */}
        </div>
        
        </>
    )
}


const TitleBox = ()=>{
    return (
        <>
        <div className={styles.titleBox}>
            <h2 className={styles.title}>What We Do</h2>
            <div className={styles.horizontalLine1}></div>
            <p className={styles.p}> Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </p>
        </div>

        </>
    )
}

const LinkProject = ()=>{
    return(
    <>
        <Link href="/projects" style={{ textDecoration: 'none' }}>
            <button className={styles.linkAllProject}>See More</button>
        </Link>
    </>
        
    )
}

const Main_04 = () =>{
    return(
        <>
            <TitleBox/>
            <ProjectList/>
            <LinkProject/>
        </>
    )
}

export default Main_04;