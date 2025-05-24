import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Content = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Navbar />
                <View style={styles.content}>
                    <Text style={styles.contentText}>Blank Page Content</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigation = useNavigation();

    const navItems = ["Showcase", "Docs", "Blog", "Analytics", "Templates", "Enterprise"];
    const navbarTitle = "AEON";

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavLinkPress = (item: any) => {
        console.log(`${item} link pressed`);
    };

    const handleTitlePress = () => {
        navigation.goBack()
        console.log(`Navbar title "${navbarTitle}" pressed. (Simulates href="/")`);
    };

    return (
        <View style={styles.navbarContainerShadow}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={handleTitlePress}>
                    <Text style={[styles.navbarTitle, styles.navbarTitleMobile]}>
                        {navbarTitle}
                    </Text>
                </TouchableOpacity>

                <View style={[styles.rightSection, styles.rightSectionMobile]}>
                    <TextInput
                        style={[
                            styles.searchInput,
                            styles.searchInputMobile,
                        ]}
                        placeholder="Search documentation..."
                        placeholderTextColor="#888"
                    />

                    <TouchableOpacity onPress={toggleMenu} style={styles.iconButton}>
                        <Ionicons style={styles.iconText} name={isMenuOpen ? "close" : "menu"} />
                    </TouchableOpacity>

                </View>
            </View>

            {isMenuOpen && (
                <ScrollView style={styles.mobileMenu}>
                    {navItems.map((item) => (
                        <TouchableOpacity
                            key={item}
                            style={styles.mobileMenuItem}
                            onPress={() => handleNavLinkPress(item)}
                        >
                            <Text style={styles.mobileMenuItemText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 60,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    navbarContainerShadow: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
        zIndex: 1000,
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        minHeight: 56,
    },
    navbarTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginRight: 24,
    },
    navbarTitleMobile: {
        fontSize: 20,
        marginRight: 4,
    },
    desktopNavLinksContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 1,
        marginRight: 'auto',
    },
    desktopNavLink: {
        fontSize: 15,
        color: '#333333',
        marginHorizontal: 12,
        paddingVertical: 4,
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    rightSectionMobile: {
        flex: 1,
        marginLeft: 10,
    },
    searchInput: {
        height: 38,
        borderWidth: 1,
        borderColor: '#DDE2E5',
        borderRadius: 6,
        paddingHorizontal: 12,
        fontSize: 14,
        backgroundColor: '#F7F9FA',
        color: '#333333',
    },
    searchInputDesktop: {
        width: 220,
    },
    searchInputMobile: {
        flex: 1,
        marginRight: 8,
    },
    iconButton: {
        padding: 10,
    },
    iconText: {
        fontSize: 24,
        color: '#333333',
    },
    mobileMenu: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#EAECEE',
        maxHeight: Dimensions.get('window').height * 0.5,
    },
    mobileMenuItem: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F2F4',
    },
    mobileMenuItemText: {
        fontSize: 16,
        color: '#333333',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    contentText: {
        fontSize: 18,
        color: '#555555',
    },
});

export default Content;
