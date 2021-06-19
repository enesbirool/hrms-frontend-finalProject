import React from 'react'
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
  } from 'semantic-ui-react'
export default function About() {
    return (
        <div>
            <Container text style={{ marginTop: "12em" }}>
          <Header as='h1'>Kodlama.io</Header>
          <p>
            Bu Website Kodlama.io NİTELİKLİ Yazılımcı Yetiştirme ve geliştirme kampında yazılmıştır                                   
          </p>
          <p>Engin Demiroğ Hocamıza Teşekkürler...</p>
        </Container>
        </div>
    )
}
