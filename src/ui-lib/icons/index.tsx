import {
    reactLogo,
    nextLogo,
    NodeLogo,
    SaasLogo,
    MongoLogo,
    ReduxLogo,
    TSLogo,
    JSLogo,
    npmLogo
} from '@public/Logos/RunningLine/index';
import { snowRed } from '@public//any/index';

import TemplateIcon from "@/ui-lib/icons/TemplateIcon/TemplateIcon";
import {ReactNode} from "react";
export const ReactIcon = (props: any) => <TemplateIcon
    {...props} icon={reactLogo.src} alt={'React'} width={96} height={96}/>
export const NextIcon = (props: any) => <TemplateIcon
    {...props} icon={nextLogo.src} alt={'Next'} width={96} height={96}/>
export const NodeIcon = (props: any) => <TemplateIcon
    {...props} icon={NodeLogo.src} alt={'NodeJS'} width={96} height={96}/>
export const SaasIcon = (props: any) => <TemplateIcon
    {...props} icon={SaasLogo.src} alt={'SAAS'} width={96} height={96}/>
export const MongoIcon = (props: any) => <TemplateIcon
    {...props} icon={MongoLogo.src} alt={'MongoDB'} width={96} height={96}/>
export const ReduxIcon = (props: any) => <TemplateIcon
    {...props} icon={ReduxLogo.src} alt={'Redux'} width={96} height={96}/>
export const TSIcon = (props: any) => <TemplateIcon
    {...props} icon={TSLogo.src} alt={'TypeScript'} width={96} height={96}/>
export const JSIcon = (props: any) => <TemplateIcon
    {...props} icon={JSLogo.src} alt={'JavaScript'} width={96} height={96}/>
export const NPMIcon = (props: any) => <TemplateIcon
    {...props} icon={npmLogo.src} alt={'node packet manager'} width={96} height={96}/>
export const SnowRedIcon = (props: any) => <TemplateIcon
    {...props} icon={snowRed.src} alt={'snow'} width={16} height={16} />