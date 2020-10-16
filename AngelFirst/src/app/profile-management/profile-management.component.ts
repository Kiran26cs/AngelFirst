import { Component, OnInit } from '@angular/core';
import { profileDetail} from './Model/profile'
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {

  private profileInfo: profileDetail
  private profiles: Array<profileDetail> = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    debugger;
    if (id > 0) {
      this.getProfileByID(id)
    } else {
      this.getListOfProfiles()
    }
  }

  getListOfProfiles() {
    this.profiles = [{ Address: 'Chennai', Name: 'Kiran', profileID: 1 },
      { Address: 'Chennai', Name: 'Anu', profileID: 2 },
      { Address: 'Coimbatore', Name: 'Raju', profileID: 3 },
      { Address: 'Coimbatore', Name: 'Kunj', profileID: 4 },
      { Address: 'Canada', Name: 'Arun', profileID: 5 },
      { Address: 'NY', Name: 'Rajee', profileID: 6 },
    ]
  }

  getProfileByID(Id: number) {
      this.getListOfProfiles()
      this.profileInfo = this.profiles.filter(x => x.profileID == Id)[0]
  }
  
}
