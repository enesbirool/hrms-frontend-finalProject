import React, { useState, useEffect } from "react";
import { Table, Header, Icon, Button, Image, Card, Modal, Label, Container } from "semantic-ui-react";
import JobSeekersService from "../../services/JobSeekersService";
import { Link } from 'react-router-dom'

export default function JobseekerList() {

    const [open, setOpen] = React.useState(false)
    const [jobseekers, setJobSeekers] = useState([]);
    useEffect(() => {
        let jobSeekerService = new JobSeekersService();
        jobSeekerService.getJobSeekers().then((result) => setJobSeekers(result.data.data));
    }, []);

    return (
        <div>
            <Header as="h2">
                <Icon name="list alternate outline" />
                <Header.Content>Job Seekers</Header.Content>
            </Header>
            <Card.Group>
                {jobseekers.map((jobseeker) =>
                    <Card key={jobseeker.id}>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='medium'
                                src=""
                            />
                            <Card.Header>{jobseeker.firstName} {jobseeker.lastName}</Card.Header>
                            <Card.Meta>BirthDate : {jobseeker.birthDate}</Card.Meta>
                            <Card.Description>
                                {jobseeker.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Mesaj
                                </Button>
                                <Link to={"/jobseeker/"+jobseeker.id}><Button basic color='blue' >Profiline Git</Button> </Link>
                            </div>
                            
                        </Card.Content>
                    </Card>
                )} 
            </Card.Group>
        </div>
    );
}