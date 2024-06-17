// Imports
// ------------
import React, { useState } from 'react';
import Input from '../Input';
import Button from '@parts/Button';
import Link from '@parts/Link';
import Icon from '@icon';
import Visualisation from '@parts/Visualisation';
import ProgressBar from './Progress';
import { Grid } from '@waffl';
import { useBreakpoint } from '@parts/Helpers/useBreakpoint';

// Styles
// ------------
import {
    Col,
    StickyJacket,
    Header,
    Title,
    Switch,
    Tab,
    Basic,
    Block,
    StatsItem,
    FieldGroup,
    ButtonJacket,
    LinkGroup,
    CelLink,
    Terminal,
} from './styles';

// Component
// ------------
const StatusBoard = ({
    status,
    stats,
    handleInput,
    handleReload,
}) => {
    // NOTE • Breakpoints
    const bp = useBreakpoint();

    // NOTE • States
    const [tab, setTab] = useState(1);

    // NOTE • Handlers
    const handleTab = (tab) => () => setTab(tab);

    return (
        <>
            <Grid $noPadding>
                <Col $small="1/3" $medium="1/7" $large="1/7">
                    <StickyJacket>
                        <Grid $noPadding>
                            <Col $small="1/3" $medium="1/7" $large="1/13">
                                <Header>
                                    <Title $dark>{status}</Title>
                                    <Switch>
                                        <Tab isActive={tab === 1} onClick={handleTab(1)} disabled={tab === 1}>Basic</Tab>
                                        <Tab isActive={tab === 2} onClick={handleTab(2)} disabled={tab === 2}>Advanced</Tab>
                                    </Switch>
                                </Header>
                            </Col>
                        </Grid>

                        {!bp.large && (
                            <Grid $noPadding>
                                <Col $small="1/3" $medium="1/7" $large="7/13">
                                    <Visualisation data={stats} />
                                </Col>
                            </Grid>
                        )}

                        <Grid $noPadding>
                            <Col $small="1/3" $medium="1/7" $large="1/13">
                                {tab === 1 && (
                                    <Basic>
                                        <Block>
                                            <div>
                                                <em>Synchronizing headers:</em>
                                                <span>{stats.syncInfo}</span>
                                            </div>
                                            <div>
                                                <ProgressBar data={stats.syncInfo} />
                                            </div>
                                        </Block>

                                        <Block>
                                            Block Height:
                                            <span>{stats.networkHeadHeight}</span>
                                            <CelLink href={`https://celenium.io/block/` + stats.networkHeadHeight} rel="noopener noreferrer" target="_blank">
                                                <Icon type="logoCelenium" />
                                                <span>View in Celenium</span>
                                            </CelLink>
                                        </Block>
                                    </Basic>
                                )}

                                {tab === 2 && (
                                    <Terminal>
                                        <div>
                                            PeerId:
                                            <span>{stats.peerId}</span>
                                        </div>
                                        <div>
                                            Sync headers:
                                            <span>{stats.syncInfo}</span>
                                            <ProgressBar data={stats.syncInfo} />
                                        </div>
                                        <div>
                                            Block Height:
                                            <span>{stats.networkHeadHeight}</span>
                                            <CelLink href={`https://celenium.io/block/` + stats.networkHeadHeight} rel="noopener noreferrer" target="_blank">
                                                <Icon type="logoCelenium" />
                                                <span>View in Celenium</span>
                                            </CelLink>
                                        </div>
                                        <div>
                                            Hash:
                                            <span>{stats.networkHeadHash}</span>
                                        </div>
                                        <div>
                                            Data square size:
                                            <span>{stats.networkHeadDataSquare}</span>
                                        </div>
                                    </Terminal>
                                )}

                                {/* <StatsItem>
                                    <label>
                                        <span>PeerId:</span>
                                        <Input name="peerId" value={stats.peerId} onChange={(e) => handleInput(e)} placeholder="..." light />
                                    </label>
                                </StatsItem>
                                <StatsItem>
                                    <label>
                                        <span>
                                            <em>Synchronizing headers:</em>
                                            <ProgressBar data={stats.syncInfo} />
                                        </span>
                                        <Input name="syncInfo" value={stats.syncInfo} onChange={(e) => handleInput(e)} placeholder="..." light />
                                    </label>
                                </StatsItem> */}
                            </Col>
                        </Grid>
                    </StickyJacket>
                </Col>
                {bp.large && (
                    <Col $small="1/3" $medium="1/7" $large="7/13" $isCenter>
                        <Visualisation data={stats} />
                    </Col>
                )}
            </Grid>
            <Grid $noPadding>
                <Col $small="1/3" $medium="1/7" $large="1/13">
                    <Grid $noPadding>
                        <Col $small="1/3" $medium="1/7" $large="1/13">
                            <ButtonJacket>
                                <Button icoL icon="back" label="Restart" onClick={handleReload} />
                                <LinkGroup>
                                    <Link icon="mint" label="Mint NFT" link="http://www.google.com" disabled />
                                    <Link icon="celestia" label="Learn more" link="https://celestia.org/run-a-light-node/" rel="noopener noreferrer" />
                                </LinkGroup>
                            </ButtonJacket>
                        </Col>
                    </Grid>
                </Col>
            </Grid>
        </>
    );
}

export default StatusBoard;