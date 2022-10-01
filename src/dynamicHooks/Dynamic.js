import React, { useState } from 'react';
export const data = {
  navigationResults: [
    {
      moduleName: 'Dashboard',
      module_id: '1',
      collapse: 'false',
      moduleUrl: '/',
      pages: [
        {
          pageName: 'Dashboard',
          pageID: 0,
          pageURL: '/',
          page_id: '1',
          CreatePermission: true,
          DelPermission: true,
          EditPermission: true,
          ViewPermission: true,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: 'Staff',
      module_id: '2',
      collapse: 'true',
      moduleUrl: '/staff',
      pages: [
        {
          pageName: 'Staff',
          pageID: 1,
          pageURL: '/staff',
          page_id: '2',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'Speakers',
          pageID: 2,
          pageURL: '/speakers',
          page_id: '2',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: 'Courses',
      module_id: '3',
      collapse: 'true',
      moduleUrl: '/courses',
      pages: [
        {
          pageName: 'Courses',
          pageID: 3,
          pageURL: '/courses',
          page_id: '3',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'Course Batch',
          pageID: 4,
          pageURL: '/courseBatch',
          page_id: '3',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'My Courses',
          pageID: 5,
          pageURL: '/myCourses',
          page_id: '3',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'Course Category',
          pageID: 6,
          pageURL: '/courseCategory',
          page_id: '3',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'Lectures',
          pageID: 7,
          pageURL: '/lectures',
          page_id: '3',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'Assignments',
          pageID: 8,
          pageURL: '/assignments',
          page_id: '3',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'Quiz',
          pageID: 9,
          pageURL: '/quiz',
          page_id: '3',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: 'Students',
      module_id: '4',
      collapse: 'true',
      moduleUrl: '/students',
      pages: [
        {
          pageName: 'Students',
          pageID: 10,
          pageURL: '/students',
          page_id: '4',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'Attandance',
          pageID: 11,
          pageURL: '/attandance',
          page_id: '4',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: 'Enrollment Approval',
      module_id: '5',
      collapse: 'false',
      moduleUrl: '/enrollmentApproval',
      pages: [
        {
          pageName: 'Enrollment Approval',
          pageID: 12,
          pageURL: '/enrollmentApproval',
          page_id: '5',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: 'Success Stories',
      module_id: '6',
      collapse: 'false',
      moduleUrl: '/successStories',
      pages: [
        {
          pageName: 'Success Stories',
          pageID: 13,
          pageURL: '/successStories',
          page_id: '6',
          CreatePermission: true,
          DelPermission: true,
          EditPermission: true,
          ViewPermission: true,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: 'Events',
      module_id: '7',
      collapse: 'false',
      moduleUrl: '/events',
      pages: [
        {
          pageName: 'Events',
          pageID: 14,
          pageURL: '/events',
          page_id: '7',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: 'Contact',
      module_id: '8',
      collapse: 'false',
      moduleUrl: '/contact',
      pages: [
        {
          pageName: 'Contact',
          pageID: 15,
          pageURL: '/contact',
          page_id: '8',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: 'FAQs',
      module_id: '9',
      collapse: 'false',
      moduleUrl: '/faqs',
      pages: [
        {
          pageName: 'FAQs',
          pageID: 16,
          pageURL: '/faqs',
          page_id: '9',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: 'Profile',
      module_id: '10',
      collapse: 'false',
      moduleUrl: '/profile/id',
      pages: [
        {
          pageName: 'Profile',
          pageID: 17,
          pageURL: '/profile/id',
          page_id: '10',
          CreatePermission: true,
          DelPermission: true,
          EditPermission: true,
          ViewPermission: true,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: 'settings',
      module_id: '11',
      collapse: 'true',
      moduleUrl: '/settings',
      pages: [
        {
          pageName: 'User Groups',
          pageID: 18,
          pageURL: '/user-groups',
          page_id: '11',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'Tabs Permission',
          pageID: 19,
          pageURL: '/tabs-permission',
          page_id: '11',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'Api Permission',
          pageID: 20,
          pageURL: '/api-permissions',
          page_id: '11',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: 'Create Organization',
          pageID: 21,
          pageURL: '/crate-organization',
          page_id: '11',
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
      ],
    },
  ],
};
export default function Dynamic() {
  const [checkStatus, setCheckStatus] = React.useState(
    data.navigationResults.map((item) => {
      return item.pages.map((items, i) => {
        console.log(i);
        return items;
      });
    })
  );
  console.log(checkStatus);

  const merge3 = checkStatus.flat(1); //The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
  console.log(merge3);

  const allData = {
    navigationResults: [],
  };
  const handlingPermission = (item, pageIndex, permission) => {
    const findModule = allData.navigationResults.filter(
      (i) => i.moduleName === item.moduleName
    );
    if (findModule.length === 1) {
      const checkPageexist = findModule[0]?.pages.find(
        (p) => p.pageName === item.pages[pageIndex].pageName
      );
      if (!checkPageexist) {
        findModule[0]?.pages.push(item.pages[pageIndex]);
      }
      findModule[0].pages[pageIndex][permission] =
        !findModule[0].pages[pageIndex][permission];
    } else {
      const test = {
        moduleName: '',
        moduleUrl: '',
        module_id: '',
        collapse: '',
        pages: [],
      };
      test.pages.push(item.pages[pageIndex]);
      test.moduleName = item.moduleName;
      test.moduleUrl = item.moduleUrl;
      test.module_id = item.module_id;
      test.collapse = item.collapse;
      test.pages[pageIndex][permission] = !item.pages[pageIndex][permission];
      allData.navigationResults.push(test);
    }
    console.log('allData', allData);
  };
  return (
    <div>
      {data.navigationResults.map((navModule, navModuleIndex) => {
        return navModule.pages.map((navPage, navPageIndex) => {
          return (
            <div>
              <p>{navPage.pageName}</p>
              <label>add</label>
              <input
                type='checkbox'
                checked={merge3[navPage.pageID].CreatePermission}
                onChange={() =>
                  handlingPermission(
                    navModule,
                    navPageIndex,
                    'CreatePermission'
                  )
                }
              />
              <label>del</label>
              <input
                type='checkbox'
                checked={merge3[navPage.pageID].DelPermission}
                onChange={() =>
                  handlingPermission(navModule, navPageIndex, 'DelPermission')
                }
              />
              <label>edit</label>
              <input
                type='checkbox'
                checked={merge3[navPage.pageID].EditPermission}
                onChange={() =>
                  handlingPermission(navModule, navPageIndex, 'EditPermission')
                }
              />
              <label>view</label>
              <input
                type='checkbox'
                checked={merge3[navPage.pageID].ViewPermission}
                onChange={() =>
                  handlingPermission(navModule, navPageIndex, 'ViewPermission')
                }
              />
            </div>
          );
        });
      })}
    </div>
  );
}
