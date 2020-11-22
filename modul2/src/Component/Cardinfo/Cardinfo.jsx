import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: #008B8B;
border-radius: 20px;
box-shadow: 0px 10px 20px -10px #008B8B;
color: #897D59;
position: relative;
width: 50%;
margin: auto;
margin-top: 150px;
@media screen and (max-width: 500px) {
      margin: auto;
}
`
const Image = styled.img`

  border: 1px solid #361f15;
  border-radius: 50%;
  padding: 7px;
  width: 60%;
  height: auto;
  margin: 20px;
  
`
const Title = styled.h5`
  margin: auto;
  color: #000000;
  font-size:1vw
`

const SelectKelas = styled.select`
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: ##008B8B;
	line-height: 1.3;
	padding: .2em 1em;
	width: 40%;
	margin: 0;
	border: 1px solid #524B35;
	box-shadow: 0 1px 0 1px #008B8B;
	border-radius: .7em;
	appearance: none;
	background-color: #008B8B;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #E7D6A6 0%,#E7D6A6 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    margin: 30px 
`


const Rowcard = styled.div
    `
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 0px;
    text-align: center;
    color: #008B8B;
`

const ColumnCard = styled.div
    `
    display: table-cell;
    text-align: center;

`

function CardInfo(props) {
    return (
        <div>
            <Image src={props.src} /><br />
            <a>{props.nama}</a><br />
            <a>{props.nim}</a>
        </div>

    )
}


export default function index() {
    return (

        <Rowcard>
            <ColumnCard>
                <Container>
                    <Title>
                        <CardInfo nama="Rozy" nim="2112011713000073" src="https://www.linkpicture.com/q/KP-Leskantara_201122.jpg" />
                    </Title>
                    <SelectKelas>
                        <option value="0">Kelas</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="4">D</option>
                    </SelectKelas>
                </Container>
            </ColumnCard>
            <ColumnCard>
                <Container>
                    <Title>
                        <CardInfo nama="Afif" nim="21120117140021" src="https://www.linkpicture.com/q/Afif-almamater.jpg" />
                    </Title>
                    <SelectKelas>
                        <option value="0">Kelas</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="4">D</option>
                    </SelectKelas>
                </Container>
            </ColumnCard>
        </Rowcard>

    );
}
