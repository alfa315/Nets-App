import React from 'react'
import { List, Image } from 'semantic-ui-react'

const ProspectsList = (props) => {
  return (
    <div>
      <div className='left'>
        <List>
          <List.Item>
            <Image avatar src={require('../../images/GTJ.jpg')} target="_blank"/>
            <List.Content>
              <List.Header><a href="http://www.espn.com/mens-college-basketball/player/_/id/4277843/gary-trent-jr" target="_blank" rel="noopener noreferrer">Gary Trent Jr.</a></List.Header>
              <List.Description> 6-6 | G | Freshman | Duke University  </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <List>
          <List.Item>
            <Image avatar src={require('../../images/Diallo.jpg')} target="_blank"/>
            <List.Content>
              <List.Header><a href="http://www.espn.com/mens-college-basketball/player/_/id/4080610/hamidou-diallo" target="_blank" rel="noopener noreferrer">Hamidou Diallo</a></List.Header>
              <List.Description> 6-5 | G | Freshman | University of Kentucky </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <List>
          <List.Item>
            <Image avatar src={require('../../images/Thomas.jpg')} target="_blank"/>
            <List.Content>
              <List.Header><a href="http://www.espn.com/mens-college-basketball/player/_/id/3912334/khyri-thomas" target="_blank" rel="noopener noreferrer">Khyri Thomas</a></List.Header>
              <List.Description> 6-3 | G | Junior | Creighton University </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <List>
          <List.Item>
            <Image avatar src={require('../../images/Mccoy.jpeg')} target="_blank"/>
            <List.Content>
              <List.Header><a href="http://www.espn.com/mens-college-basketball/player/_/id/4278955/brandon-mccoy" target="_blank" rel="noopener noreferrer">Brandon McCoy</a></List.Header>
              <List.Description> 7-1 | C | Freshman | UNLV  </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <List>
          <List.Item>
            <Image avatar src={require('../../images/Wiley.jpeg')} target="_blank"/>
            <List.Content>
              <List.Header><a href="http://www.espn.com/mens-college-basketball/player/_/id/4078506/austin-wiley" target="_blank" rel="noopener noreferrer">Austin Wiley</a></List.Header>
              <List.Description> 6-11 | C | Sophomore | Auburn University  </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>

      <div className='right'>
        <List>
          <List.Item>
            <Image avatar src={require('../../images/Porter.jpg')} target="_blank"/>
            <List.Content>
              <List.Header><a href="http://www.espn.com/mens-college-basketball/player/_/id/4278103/jontay-porter" target="_blank" rel="noopener noreferrer">Jontay Porter</a></List.Header>
              <List.Description> 6-11 | F | Freshman | University of Missouri  </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <List>
          <List.Item>
            <Image avatar src={require('../../images/Chandler.jpeg')} target="_blank"/>
            <List.Content>
              <List.Header><a href="http://www.espn.com/mens-college-basketball/player/_/id/3149010/chandler-hutchison" target="_blank" rel="noopener noreferrer">Chandler Hutchison</a></List.Header>
              <List.Description> 6-7 | G | Senior | Boise State </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <List>
          <List.Item>
            <Image avatar src={require('../../images/KBD.jpeg')} target="_blank"/>
            <List.Content>
              <List.Header><a href="http://www.espn.com/mens-college-basketball/player/_/id/3136779/keita-bates-diop" target="_blank" rel="noopener noreferrer">Keita Bates Diop</a></List.Header>
              <List.Description> 6-7 | F | Junior | Ohio State University </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <List>
          <List.Item>
            <Image avatar src={require('../../images/Raw.jpg')} target="_blank"/>
            <List.Content>
              <List.Header><a href="http://www.espn.com/mens-college-basketball/player/_/id/4066334/rawle-alkins" target="_blank" rel="noopener noreferrer">Rawle Alkins</a></List.Header>
              <List.Description> 6-5 | G | Sophomore | The University of Arizona   </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <List>
          <List.Item>
            <Image avatar src={require('../../images/Melvin.jpeg')} target="_blank"/>
            <List.Content>
              <List.Header><a href="http://www.espn.com/mens-college-basketball/player/_/id/3913546/melvin-frazier" target="_blank" rel="noopener noreferrer">Melvin Frazier</a></List.Header>
              <List.Description> 6-6 | G | Junior | Tulane University  </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>

    </div>
  )
}

export default ProspectsList
