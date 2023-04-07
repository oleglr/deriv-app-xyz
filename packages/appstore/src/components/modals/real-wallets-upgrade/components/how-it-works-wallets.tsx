import React from 'react';
import { Modal, Button, Text, Icon, Div100vhContainer } from '@deriv/components';
import { localize } from '@deriv/translations';
import '../real-wallets-upgrade.scss';
import TradingPlatformIcon from 'Assets/wallets';
import { isDesktop } from '@deriv/shared';

type StepProps = {
    onNext?: () => void;
    onBack?: () => void;
};

const HowItWorksWallets = ({ onNext, onBack }: StepProps) => {
    return (
        <React.Fragment>
            <Modal.Body className='introducing-wallets'>
                <Div100vhContainer is_disabled={isDesktop()} height_offset='15rem'>
                    <div className='introducing-wallets--content'>
                        <TradingPlatformIcon icon='HowItWorks' />
                        <Text
                            as='h1'
                            color='prominent'
                            weight='bold'
                            align='center'
                            size='l'
                            className='introducing-wallets--title'
                        >
                            {localize('How it works')}
                        </Text>
                        <Text
                            as='p'
                            color='prominent'
                            size='m'
                            align='center'
                            className='introducing-wallets--description'
                        >
                            {localize('Get a Wallet, add funds, trade')}
                        </Text>
                        <div className='introducing-wallets--bullet'>
                            <Icon icon='IcAppstoreTick' />
                            <Text as='p' color='prominent' align='center' className='introducing-wallets--bullet--text'>
                                {localize('Get a Wallet for the currency you want')}
                            </Text>
                        </div>
                        <div className='introducing-wallets--bullet'>
                            <Icon icon='IcAppstoreTick' />
                            <Text as='p' color='prominent' className='introducing-wallets--bullet--text'>
                                {localize('Add funds to your Wallet via your favourite payment method')}
                            </Text>
                        </div>
                        <div className='introducing-wallets--bullet'>
                            <Icon icon='IcAppstoreTick' />
                            <Text as='p' color='prominent' className='introducing-wallets--bullet--text'>
                                {localize('Move funds to your trading account to start trading')}
                            </Text>
                        </div>
                    </div>
                </Div100vhContainer>
            </Modal.Body>
        </React.Fragment>
    );
};

export default HowItWorksWallets;
