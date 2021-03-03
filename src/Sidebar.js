import { ExpandMoreOutlined } from '@material-ui/icons'
import React from 'react'
import logo from './images/user.jpg'
import SidebarRow from './SidebarRow'
import LocalHopitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import storefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import {useStateValue} from './StateProvider'
import './Sidebar.css'

function Sidebar() {
        const [{user},dispatch]=useStateValue();
        return (
                <div className="sidebar">
                        <SidebarRow src={user.photoURL} title={user.displayName} />
                        <SidebarRow Icon={LocalHopitalIcon} title="COVID-19 Information Center" />
                        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
                        <SidebarRow Icon={ChatIcon} title="Messenger"/>
                        <SidebarRow Icon={storefrontIcon} title="Marketplace"/>
                        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
                        <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace"/>
                </div>
        )
}

export default Sidebar
