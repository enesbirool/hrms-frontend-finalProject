import React from "react";
import { Grid } from 'semantic-ui-react'
import { Route } from "react-router";
import JobSeekersList from "./JobSeekersList";
import EmployersList from "./EmployersList";
import SideBar from "../../layouts/SideBar";

export default function BaseList() {
    return (
        <div>
            <Grid>
                <Grid.Row >
                    <Grid.Column width={4}>
                        <SideBar></SideBar>
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <Route exact path="/list" component={JobSeekersList}/>
                    <Route exact path="/list/jobseekers" component={JobSeekersList}/>
                    <Route exact path="/list/employers" component={EmployersList}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
