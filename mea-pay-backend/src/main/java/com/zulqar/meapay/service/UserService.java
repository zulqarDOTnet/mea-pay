package com.zulqar.meapay.service;

import com.zulqar.meapay.dao.RoleDao;
import com.zulqar.meapay.dao.UserDao;
import com.zulqar.meapay.entity.Role;
import com.zulqar.meapay.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role");
        roleDao.save(userRole);

        User adminUser = new User();
        adminUser.setUserName("admin");
        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
        adminUser.setUserFirstName("Admin");
        adminUser.setUserLastName("Admin");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);

        User user = new User();
        user.setUserName("zulqar");
        user.setUserPassword(getEncodedPassword("user@pass"));
        user.setUserFirstName("Zulqarnain");
        user.setUserLastName("Zafar");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(userRole);
        user.setRole(userRoles);
        userDao.save(user);
    }

    public User registerNewUser(User user) {
        Role role = roleDao.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userDao.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
